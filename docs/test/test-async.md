---
id: test-async
title: ⑤ 异步验证
---

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '5px',
color: '#fff',
padding: '0.2rem',
fontWeight:'bold'
}}>
{children}
</span>
);

:::danger 请听题
对于下面这段代码你觉得单测能通过吗?
:::

```java title="异步场景"
    @Test
    public void test() {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        executorService.submit(new Runnable() {
            @SneakyThrows
            @Override
            public void run() {
                Thread.sleep(5000);
                Object obj = null;
                System.out.println(obj.toString());
            }
        });
        System.out.println("单侧结束");
    }
```

## 一、常用解决方案

### 1.1 white解决简单暴力

```java title="white解决"
    @Test
    public void test() {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        executorService.submit(new Runnable() {
            @SneakyThrows
            @Override
            public void run() {
                Thread.sleep(5000);
                Object obj = null;
                System.out.println(obj.toString());
            }
        });
        System.out.println("单侧结束");
        white(true);
    }
```

### 1.2 LockSupport最大时间限制
```java title="LockSupport.parkNanos()线程挂起"
    @Test
    public void test() {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        executorService.submit(new Runnable() {
            @SneakyThrows
            @Override
            public void run() {
                Thread.sleep(5000);
                Object obj = null;
                System.out.println(obj.toString());
            }
        });
        System.out.println("单侧结束");
         // 挂起指定时间
        LockSupport.parkNanos(TimeUnit.SECONDS.toNanos(6));
    }
```

## 二、基于上面两种配合JUnit定制

### 2.1 使用演示




📢 注意这里的 <Highlight color="#e6a23c">@Timed</Highlight> 原生是不具备这个能力的,要基于JUnit进行扩展。

```java {2} title="@Timed 灵活控制时间"
    @Test
    @Timed(millis = 5000)
    public void test() {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        executorService.submit(new Runnable() {
            @SneakyThrows
            @Override
            public void run() {
                Thread.sleep(5000);
                System.out.println("任务执行结束");
            }
        });
        System.out.println("单侧结束");
    }
```

### 2.2 扩展实现

同样是基于LockSupport线程挂起方案,类似于切面解决。

```java {39} title="扩展TestExecutionListener"

    private Map<String, Long> timedMap = new HashMap<>();

    private Map<String, Long> beforeTestCostMap = new HashMap<>();
    
    @Override
    public void beforeTestMethod(TestContext testContext) throws Exception {
        String key = testContext.getTestMethod().getName();
        beforeTestCostMap.put(key, System.currentTimeMillis());
        Timed timedA = AnnotationUtils.getAnnotation(testContext.getTestMethod(), Timed.class);
        if (Objects.nonNull(timedA)) {
            timedMap.put(testContext.getTestMethod().getName(), timedA.millis());
        }
        Method testMethod = testContext.getTestMethod();
        printActiveProfile(testContext);
        checkTransactional(testContext);
        TestConsole.colorPrintln(AnsiColor.BLUE, "西魏陶渊明发起了一个单侧用例: {}#{}", testContext.getTestClass(), testMethod.getName());
    }

    @Override
    public void afterTestMethod(TestContext testContext) throws Exception {
        String key = testContext.getTestMethod().getName();
        Long afterTestCost = System.currentTimeMillis();
        Long beforeTestCost = beforeTestCostMap.get(key);
        long timed = timedMap.get(key);
        // 如果耗时已经大于指定的时间了,就直接过
        if ((timed <= 0) || afterTestCost - beforeTestCost > timed) {
            Throwable testException = testContext.getTestException();
            if (Objects.nonNull(testException)) {
                TestConsole.colorPrintln(AnsiColor.BRIGHT_RED, "测试用例执行失败了,快检查检查吧。🚒");
            } else {
                TestConsole.colorPrintln("用例执行成功。💪");
            }
        } else {
            // 如果不够,就要挂起指定时间。（减去1000毫秒,给Timed预留的时间）
            long nanos = TimeUnit.MILLISECONDS.toNanos(timed - (afterTestCost - beforeTestCost) - 1000);
            // 主线程挂起,等待异步执行
            System.err.printf("Timed任务挂起通知: 主线程挂起%d s,等待异步执行%n", TimeUnit.NANOSECONDS.toSeconds(nanos));
            LockSupport.parkNanos(nanos);
        }

    }
```

### 2.3 引导类配置

- @TestExecutionListeners 注意声明添加模式是合并(默认是替换)

```java {7} title="@TestExecutionListeners"
@Slf4j
@ActiveProfiles({"local"})
@ContextConfiguration(initializers = {BeanLazyApplicationContextInitializer.class})
// 使用Spring容器引导
@RunWith(SpringRunner.class)
// 合并模式下,增加测试执行监听器
@TestExecutionListeners(value = PmsSentryTestExecutionListener.class, mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS)
// 默认就是回滚,不用加@Rollback,如果全局不想回滚就在这个吧@Rollback(false),如果某个单测不想回滚,就放到单侧类上
@Transactional
@SpringBootTest(classes = {CenterProviderApplication.class}) // 指定启动类
public class BaseApplicationTest {
}
```
