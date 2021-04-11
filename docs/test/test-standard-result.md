---
id: test-standard-result
title: 单测维护
---

:::info 单测维护

:::

export const Tag = ({children}) => (
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

## 一、考虑不要跳过单测

目前我们都是跳过单测的,测试都是每次改造完成后,手工去进行验证。
验证没有问题就提测了。这样的单测是没有维护性的。

当我们建立起单测体系后,真正重视单测维护后,就可以考虑不要跳过单元测试
这样<Tag>每次编译时候都可以执行一遍单测用例,观察失败的单测试服是这次改造的bug导致。</Tag>


## 二、后期维护单测

开发时间紧张,没有进行单测就提测了,测试也通过了。对于这类代码后期可以补充上单测。方便后面进行业务调整时候,进行单测验证。

只有这样开发人员才更有底气。

## 三、售后服务

应用Owner要督促,应用成员要重视。做好应用质量把控。

