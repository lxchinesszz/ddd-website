---
id: _.group
title: _.group
---

```java

public static <T, K> Map<K, List<T>> group(Stream<T> dataStream, Function<? super T, ? extends K> keyApply)

public static <T, K, V> Map<K, List<V>> group(Stream<T> dataStream, Function<? super T, ? extends K> keyApply,
                                                  Function<? super T, ? extends V> valueApply)
```


**参数**

- dataSources `(List<T>)` 待参加计算的数据信息。
- keyApply                分组项,作为map的key
- valueApply              数据转换器,作为map的value


**返回值**

- `Map<K, List<V>` 返回一个Map类型分组结果

**例子**

```java
List<Person> peoples = Arrays.asList(                                                   
        new Person(12, "孙悟空"),                                                          
        new Person(12, "猪八戒"),                                                          
        new Person(12, "孙悟空")                                                           
);                                                                                      
Map<String, List<Person>> group = EnhanceStream.group(peoples, Person::getName);        
Console.log(group);                                                                     
//=>{孙悟空=[Person{age=12, name='孙悟空'}, Person{age=12, name='孙悟空'}], 猪八戒=[Person{age=12, name='猪八戒'}]}

Map<String, List<String>> nameList = EnhanceStream.group(peoples, Person::getName,Person::getName); 
Console.log(nameList);                                                                              
//=>{孙悟空=[孙悟空, 孙悟空], 猪八戒=[猪八戒]}
```
