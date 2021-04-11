---
id: test-standard-limit
title: 极限测试
---

:::danger 极限测试

- 最大值
- 最小值
- null值
- 空值
- 异常
:::

### 这段代码会执行通过吗?

```java 
  int a = 24 * 24 * 60 * 60 * 1000;
  int b = 25 * 24 * 60 * 60 * 1000;
  Assert.assertTrue(b > a);
```

关于测试用例的要思考下是否要使用极限值,验证。
