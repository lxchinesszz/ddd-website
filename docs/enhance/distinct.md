---
id: _.distinct
title: _.distinct
---

```javascript

public static <T> List<T> distinct(List<T> dataSources)

```


**参数**

- dataSources `(List<T>)` 要去重的集合。

**返回值**

- `List<T>` 返回一个去重后的新 `List<T>` 集合。

**例子**

```java

EnhanceStream.distinct(Arrays.asList(1, 2, 3, 4, 2, 1))
//=> [1, 2, 3, 4]

//=>Person记得要重写equals和hashCode方法
List<Person> people = Arrays.asList(
                new Person(12, "孙悟空"),
                new Person(12, "猪八戒"),
                new Person(13, "孙悟空")
        );
System.out.println(EnhanceStream.distinct(people));
//=>[Person{age=12, name='孙悟空'}, Person{age=12, name='猪八戒'}]
```
