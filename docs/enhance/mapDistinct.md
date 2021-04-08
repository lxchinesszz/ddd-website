---
id: _.mapDistinct
title: _.mapDistinct
---

```javascript

public static <T, R> List<R> mapDistinct(List<T> dataSources, Function<T, R> mapper)

```


**参数**

- dataSources `(List<T>)` 要去重的集合。
- mapper                  将原始类型转换成新的类型

**返回值**

- `List<R>` 返回一个去重后的新 `List<R>` 集合。

**例子**

```javascript
EnhanceStream.mapDistinct(Arrays.asList(
    new Person(12, "孙悟空"),
    new Person(12, "猪八戒"),
    new Person(13, "孙悟空")
    ),
    Person::getAge);
//=> [12, 13]
```
