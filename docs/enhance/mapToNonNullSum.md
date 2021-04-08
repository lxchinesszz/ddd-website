---
id: _.mapToNonNullSum
title: _.mapToNonNullSum
---

```java
public static <T, N extends Number> N mapToNonNullSum(List<T> dataSources, Function<T, N> mapper)
```


**参数**

- dataSources `(List<T>)` 待参加计算的数据信息。
- mapper                  指定数据参与计算的属性

**返回值**

- `<N extends Number>` 返回一个Number数学计算结果

**例子**

```java
List<Person> peoples = Arrays.asList(
    new Person(12, "孙悟空"),
    new Person(null, "猪八戒"),
    new Person(12, "孙悟空")
);
Integer totalInteger = EnhanceStream.mapToNonNullSum(peoples, Person::getAge);
Console.log(totalInteger);
//=>24

List<Long> longs = Arrays.asList(1L, 2L, 3L);
Long totalLong = EnhanceStream.mapToNonNullSum(longs, Function.identity());
Console.log(totalLong);
//=>6

List<Double> doubles = Arrays.asList(1.1d, 2.2d, 3.3d);
Double totalDouble = EnhanceStream.mapToNonNullSum(doubles, Function.identity());
Console.log(totalDouble);
//=>6.6
```
