---
id: test-technology 
title: 技术选型
---

### JUnit 

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '5px',
color: '#fff',
padding: '0.2rem',
}}>
{children}
</span>
);



[JUnit](https://junit.org/junit5/)目标是为JVM上的开发人员端测试创建最新的基础。这包括关注Java 8及更高版本，以及启用许多不同的测试样式。

强制使用 `Junit3` 以上版本, 目前最新的版本是 <Highlight color="#25c2a0">Junit5</Highlight>, 常用的是 `JUnit4`,建议使用<Highlight color="#25c2a0">JUnit4</Highlight>

```xml

<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```

### Mockito

[Mockito](https://site.mockito.org/) 是一个非常不错的模拟框架。它使您可以使用干净简单的API编写漂亮的测试。Mockito不会给您带来麻烦，因为这些测试的可读性很强，并且会产生清晰的验证错误。

![](https://github.com/mockito/mockito.github.io/raw/master/img/logo%402x.png)


mockito-core只包含mockito类，而mockito-all包含mockito类以及一些依赖项，其中一个是hamcrest。

实际上mockito-all已停产according to the mockito website


```xml
<!-- https://mvnrepository.com/artifact/org.mockito/mockito-core -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>3.8.0</version>
    <scope>test</scope>
</dependency>
```


```java title="代码实例"
    
    // 根据这个原理,我们可以mock所有未实现的功能,比如三方的接口
    @Test
    public void test(){
        List mockList = Mockito.mock(List.class);
        Mockito.doReturn(12).when(mockList).get(0);
        // 12
        System.out.println(mockList.get(0));
        Assert.assertSame(12,mockList.get(0));
    }
```
