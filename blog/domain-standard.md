---
slug: 领域驱动设计要解决的问题
title: 领域驱动设计要解决的问题
author: lxchinesszz
author_title: 可执行、可落地、可度量
author_url: https://blog.springlearn.cn/
author_image_url: https://img.springlearn.cn/avatar.jpg
---

:::tip

领域驱动关键在于领域,但是领域的划分没有标准的答案, 也没有唯一的答案。导致我们在项目重构的时候,往往无从下手。
为此这里提供一个可参考的答案。
:::


## 一、解决的问题

![](https://img.springlearn.cn/blog/learn_1615965548000.png)


### 1.1 耦合

三方系统的模型和接口, 不做任何的防腐处理。直接侵入我们的业务系统。一旦三方系统模型变更接口变更导致我们在业务代码中去处理兼容性问题，难免可能出现问题。

### 1.2 重复

设计重复，代码重复。同样一条数据库查询，都直接调用底层能力进行查询能力。每个人各写各的。各自维护。一旦对相同查询语句进行维护，每个人都要去找自己写的代码，然后沟通后修改。维护不方便。

### 1.3 可扩展

- 面向接口编程，面向抽象编程。遵从开闭原则。
- 不要直接使用基础层数据。留出一个加工的口子。遵从计算机科学的<<中间层定律>>。
### 1.4 面向过程

- 面向过程的代码是冗长的，面向对象的代码中清晰的。
- 根据什么维度来抽象出对象。

## 二、架构分层设计

![](https://img.springlearn.cn/blog/learn_1618040320000.png)