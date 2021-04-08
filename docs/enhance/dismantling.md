---
id: _.dismantling
title: _.dismantling
---

```java
public static <T, K, V> Map<K, V> dismantling(List<T> dataSources, Function<? super T, ? extends K> keyApply,
   
public static <K, T, V> Map<K, V> dismantlingFirst(List<T> dataSource,Function<? super T, ? extends K> keyApply,Function<? super T, ? extends V> valueApply)
```


**参数**

- dataSources `(List<T>)` 待参加计算的数据信息。
- keyApply                拆分的key
- valueApply              拆分的value

:::warning

注意数据拆分必须是一对一的关系,否则会出现key重复异常。
如过要兼容这种场景,当出现key重复只取第一个,忽略剩下的。

:::

**返回值**

- `Map<K, V>` 将数据拆分成一一对应的关系

**例子**

```java
List<Person> persons = Arrays.asList(                                                                  
        new Person(12, "孙悟空"),                                                                         
        new Person(12, "猪八戒"),                                                                         
        new Person(12, "唐三藏")                                                                          
);                                                                                                     
Map<String, Integer> success = EnhanceStream.dismantling(persons, Person::getName, Person::getAge);    
Console.log(success);                                                                                  
//=>{孙悟空=12, 猪八戒=12, 唐三藏=12}        
                                                                                                       
List<Person> errorPerson = Arrays.asList(                                                              
        new Person(12, "孙悟空"),                                                                         
        new Person(12, "猪八戒"),                                                                         
        new Person(12, "孙悟空")                                                                          
);                                                                                                     
//java.util.DuplicateFormatFlagsException: name中存在相同的元素则报错                                             
Map<String, Integer> error = EnhanceStream.dismantling(errorPerson, Person::getName, Person::getAge);  
Console.log(error);  
//java.util.DuplicateFormatFlagsException: Flags = '数据重复,请检查绑定key=孙悟空                                                                                  

Map<String, Integer> integerMap = EnhanceStream.dismantlingFirst(errorPerson, Person::getName, Person::getAge);
Console.log(integerMap);
//=>{孙悟空=12, 猪八戒=12} 忽略重复的key
```
