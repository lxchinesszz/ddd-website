---
id: _.mapToList
title: _.mapToList
---


```java
public static <T, R> List<R> mapToList(List<T> dataSources, Function<T, R> mapping)
```


**参数**

- dataSources `(List<T>)` 数据集合。
- mapper                  指定数据要映射的新数据

**返回值**

- `List<R>` 返回一个新的数据集合

**例子**

```java
List<Person> people = Arrays.asList(
        new Person(12, "孙悟空"),
        new Person(12, "猪八戒"),
        new Person(12, "孙悟空")
);
List<String> strings = EnhanceStream.mapToList(people, Person::getName);
Console.log(strings);
//=>[孙悟空, 猪八戒, 孙悟空]
```
