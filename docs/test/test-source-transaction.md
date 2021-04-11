---
id: test-source-transactional
title: ④ 事务回滚原理
---

export const Version = ({children}) => (
<span
style={{
backgroundColor: '#f9f2f4',
borderRadius: '5px',
color: '#c92f56',
padding: '0.2rem',
fontWeight:'bold'
}}>
{children}
</span>
);

在前文单测类注入中我们知道.JUnit提供了一些监听器,允许
当单测方法执行时候去对单测上下文进行调整。所以呢事务回滚也是基于
这里的特性完成的。<Version>基于SpringBoot 2.1.x版本分析</Version>

![](https://img.springlearn.cn/blog/learn_1617795655000.png)


### 源码分析

Spring中为了适配不通的数据库,提供了事务平台的概念。 `PlatformTransactionManager` 只要实现了该接口
就允许对事务进行控制。具体事务的控制是通过工具类来处理的。 `TransactionContextHolder` 可以获取当前线程
执行的事务上下文。JUnit通过该工具拿到事务的上下文,然后对此做响应的修改。具体的
修改逻辑见下文注释。两句话解释清楚。

`TransactionalTestExecutionListener`

```java {1,40} title="伪代码分析"
    // 单测方法执行前,移除容器原来的事务管理器,然后开启一个新的事务
    @Override
	public void beforeTestMethod(final TestContext testContext) throws Exception {
		Method testMethod = testContext.getTestMethod();
		Class<?> testClass = testContext.getTestClass();
		Assert.notNull(testMethod, "Test method of supplied TestContext must not be null");

		TransactionContext txContext = TransactionContextHolder.removeCurrentTransactionContext();
		Assert.state(txContext == null, "Cannot start new transaction without ending existing transaction");

		PlatformTransactionManager tm = null;
		TransactionAttribute transactionAttribute = this.attributeSource.getTransactionAttribute(testMethod, testClass);

		if (transactionAttribute != null) {
			transactionAttribute = TestContextTransactionUtils.createDelegatingTransactionAttribute(testContext,
				transactionAttribute);

			if (logger.isDebugEnabled()) {
				logger.debug("Explicit transaction definition [" + transactionAttribute +
						"] found for test context " + testContext);
			}

			if (transactionAttribute.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NOT_SUPPORTED) {
				return;
			}

			tm = getTransactionManager(testContext, transactionAttribute.getQualifier());
			Assert.state(tm != null,
					() -> "Failed to retrieve PlatformTransactionManager for @Transactional test: " + testContext);
		}

		if (tm != null) {
			txContext = new TransactionContext(testContext, tm, transactionAttribute, isRollback(testContext));
			runBeforeTransactionMethods(testContext);
			txContext.startTransaction();
			TransactionContextHolder.setCurrentTransactionContext(txContext);
		}
	}
	
	// 单测方法执行结束后,结束事务然后回滚或提交
	@Override
	public void afterTestMethod(TestContext testContext) throws Exception {
		Method testMethod = testContext.getTestMethod();
		Assert.notNull(testMethod, "The test method of the supplied TestContext must not be null");

		TransactionContext txContext = TransactionContextHolder.removeCurrentTransactionContext();
		// If there was (or perhaps still is) a transaction...
		if (txContext != null) {
			TransactionStatus transactionStatus = txContext.getTransactionStatus();
			try {
				// If the transaction is still active...
				if (transactionStatus != null && !transactionStatus.isCompleted()) {
					txContext.endTransaction();
				}
			}
			finally {
				runAfterTransactionMethods(testContext);
			}
		}
	}
```
