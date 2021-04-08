---
id: junit-api
title: JUnit API
---

只打印的单测是没有意义的。正确使用单测工具, 提高单测质量。


## 空值验证
```java
    @Test
    public void test() {
        Object o = new Object();
        // 非空验证
        Assert.assertNotNull(o);
        // 空值验证
        Assert.assertNull(null);
    }    
```

## 逻辑验证

```java
    import static org.hamcrest.MatcherAssert.*;
    import static org.hamcrest.CoreMatchers.*;
    public calss Test{
        @Test
        public void test() {
            //测试变量是否大于指定值
            ArrivalNoticeOrderDO ao = new ArrivalNoticeOrderDO();
            ao.setId(12L);
            //测试所有条件必须成立
            assertThat(ao.getId(), allOf(is(12L)));
            //测试只要有一个条件成立
            assertThat(ao.getId(), anyOf(is(50), is(12L)));
            //测试变量值等于指定值
            assertThat(ao.getId(), is(12L));
        }
    }
```

## 异常验证

```java
    /**
     * 预期异常
     */
    @Test(expected = NullPointerException.class)
    public void testError(){
        Object o = null;
        System.out.println(o.toString());
    }
```
