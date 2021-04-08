---
id: _.mapToMergeList
title: _.mapToMergeList
---

```java
public static <T, R> List<R> mapToMergeList(List<T> dataSources, Function<T, List<R>> mapping)
```


**参数**

- dataSources `(List<T>)` 待参加计算的数据信息。
- mapper                  指定数据参与计算的属性

**返回值**

- `List<R>` 返回一个新的合并后的数据集合

**例子**

```java
 class School {
       String name;
       List<Person> people;

       public School(String name, List<Person> people) {
           this.name = name;
           this.people = people;
       }

       public List<Person> getPeople() {
           return people;
       }
 }
 List<School> schools = new ArrayList<>();
 schools.add(new School("西天大学", Arrays.asList(
         new Person(0, "刘校长"),
         new Person(0, "孙主任")
 )));

 schools.add(new School("东江大学", Arrays.asList(
         new Person(0, "宋主任"),
         new Person(0, "黑旋风")
 )));
 List<Person> people = EnhanceStream.mapToMergeList(schools, School::getPeople);
 Console.log(people);
 //=>[Person{age=0, name='刘校长'}, Person{age=0, name='孙主任'}, Person{age=0, name='宋主任'}, Person{age=0, name='黑旋风'}]
```
