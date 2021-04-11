---
id: test-standard-assert
title: 使用断言
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

export const Code = ({children}) => (
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


:::danger 断言

单测方法尽可能去使用断言,明确方法的执行结果

:::

## 一、单测的目的

我们单测的目的就是为了确定,被测试的方法或者是接口是否符合业务要求。
其中一些方法是只要跑成功就算成功了,但是其实大部分方法还是要看其中的返回值是否符合预期。


在平时的开发中发现许多同学只是喜欢把结果打印出来,人工去验证数据。这其实就跟JUnit的口号相违背了。
JUnit的口号: <Highlight color="green">keep the bar green to keep the code clean。</Highlight>


![](../../static/img/junit-success.gif)


### 1.1 正确的单测一定是有断言的

断言明确执行结果,如果你要看数据也可以把结果打印出来。但是断言也要加上。
`JUnit` 为我们提供了一些辅助的函数，就是用来帮助我们来判断被测试的方法是否如我们预期的效果一样正常执行。

## 二、断言API

### 2.1 assertEquals

- <Code>assertEquals(Object expected, Object actual)</Code>
- <Code>assertEquals(String message, Object expected, Object actual)</Code>

String message： 可选参数，将在发生错误时报告这个消息
Object expected： 期望值，一般为用户指定的内容
Object actual： 被测试的代码实际返回的结果

### 2.2 assertTrue 与 assertFalse

- <Code>assertTrue(boolean condition)</Code>
- <Code>assertTrue(String message, boolean condition)</Code>

String message： 可选参数，将在发生错误时报告这个消息
boolean condition：待验证的 Boolean 类型值

assertTrue 该断言用来验证给定的布尔型值是否为真，如果结果为假，则验证失败；
相反，assertFalse 用来验证给定的布尔型值是否为假，如果结果为真，则验证失败。

### 2.3 assertNull 与 assertNotNull

- <Code>assertNull(Object object)</Code>
- <Code>assertNull(String message, Object object)</Code>

String message： 可选参数，将会在发生错误时报告这个消息
Object object： 待验证是否为 Null 的对象

assertNull 该断言用来验证给定的对象是否为 Null ,如果给定对象为 非Null，则验证失败。
相反，assertNotNull 用来验证给定的对象是否为 非Null，如果为 Null，则验证失败。

### 2.4 assertSame 与 assertNotSame

- <Code>assertSame(Object expected, Object actual)</Code>
- <Code>assertSame(String message, Object expected, Object actual)</Code>

String message： 可选参数，将会在发生错误时报告这个消息
Object expected：期望值
Object actual：被测试代码返回的实际值

assertSame 该断言用来验证 expected 和 actual 的引用是否为同一个对象的引用，如果不是同一引用，则验证失败。
相反，assertNotSame 用来验证 expected 和 actual 的引用是否为不同对象的引用，如果为同一对象引用，则验证失败。

### 2.5 Fail

- <Code>Fail()</Code>
- <Code>Fail(String message)</Code>


String message是个可选参数，假如提供，将会在发生错误时报告这个消息。

该断言会使测试立即失败，通常用在测试不能达到的分支上（如异常）。


## 三、断言匹配

```java title="依赖包"
import org.hamcrest.Matchers;
import org.hamcrest.core.AllOf;
import org.hamcrest.core.AnyOf;
```

### 3.1 Matchers匹配器

```java 
        // 是否相等
        Assert.assertThat(2, Matchers.is(2));
        // 2 小于等于2
        Assert.assertThat(2,Matchers.lessThanOrEqualTo(2));
        Map<String,String> map = new HashMap<>();
        map.put("name","jay");
        // map 中是否包含key为name的元素
        Assert.assertThat(map,Matchers.hasKey("name"));
        // map 中是否包含value为jay的元素
        Assert.assertThat(map,Matchers.hasValue("jay"));
        // map 中是否包含name等于jay的元素
        Assert.assertThat(map,Matchers.hasEntry("name","jay"));
```
### 3.2 AllOf

```java 
   // 2 小于4同时也小于3
   Assert.assertThat(2, AllOf.allOf(Matchers.lessThan(4), Matchers.lessThan(3)));
```

### 3.3 AnyOf

```java 
   // 2 大于1小于3
   Assert.assertThat(2, AnyOf.anyOf(Matchers.greaterThan(1), Matchers.lessThan(3)));
```
