---
id: test-source-read
title: ① 谁在调用JUnit
---

export const Version = ({children}) => (
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

当点击了执行单例,发生了什么事情? <Version>基于SpringBoot 2.1.x版本分析</Version>

![](https://img.springlearn.cn/blog/learn_1617790044000.png)

可以看到idea会将单侧的类和方法传递给JUnit。最终由

![](https://img.springlearn.cn/blog/learn_1617790263000.png)


可以看到最终是由 `AllDefaultPossibilitiesBuilder` 来进行了承接 。所以到这里我们就找到了入口。后续所有的能力,都要从JUnit中去寻找了。

```java
    @Override
    public Runner getRunner() {
        if (runner == null) {
            synchronized (runnerLock) {
                if (runner == null) {
                    runner = new AllDefaultPossibilitiesBuilder(canUseSuiteMethod).safeRunnerForClass(fTestClass);
                }
            }
        }
        return runner;
    }
```
