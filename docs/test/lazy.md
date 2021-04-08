---
id: test-lazy
title: ② 启动缓慢
---

:::caution 启动缓慢分析

当应用中拥有大对象,可能会导致单侧启动比较慢,针对这种问题有不同的解决方案


:::



### SpringBoot 2.2 解决方案

```
spring.main.lazy-initialization = true
```

SpringApplication 会自动添加一个叫 `LazyInitializationBeanFactoryPostProcessor`的处理器
![](https://img.springlearn.cn/blog/learn_1617787733000.png)

### SpringBoot 2.2 以前

给应用上下文提前装载一个类似的处理器,然后通过 `BeanFactoryPostProcessor` 在容器刷新前循环将 `BeanDefinition` 声明懒加载

```java
public class BeanLazyApplicationContextInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    @Override
    public void initialize(ConfigurableApplicationContext applicationContext) {
        applicationContext.addBeanFactoryPostProcessor(new LazyBeanDefinitionPostProcessor());
    }

    public static class LazyBeanDefinitionPostProcessor implements BeanFactoryPostProcessor, Ordered {

        @Override
        public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
            for (String beanName : beanFactory.getBeanDefinitionNames()) {
                BeanDefinition beanDefinition = beanFactory.getBeanDefinition(beanName);
                if (beanDefinition instanceof AbstractBeanDefinition) {
                    beanDefinition.setLazyInit(true);
                }
            }
        }

        @Override
        public int getOrder() {
            return Ordered.HIGHEST_PRECEDENCE;
        }
    }

}
```

:::tip 测试引导类配置变更

- @ContextConfiguration 通过容器初始化去新增处理器
- @ActiveProfiles       指定测试环境激活的配置是local
:::


```java title="@ContextConfiguration添加处理器"
@Slf4j
@ActiveProfiles({"local"})
@ContextConfiguration(initializers = {BeanLazyApplicationContextInitializer.class})
// 使用Spring容器引导
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {CenterProviderApplication.class}) // 指定启动类
public class BaseApplicationTest {
    
}
```

### 如何确定版本?

`Idea` 中搜索 `@SpringApplication` 查看所在的包
![](https://img.springlearn.cn/blog/learn_1617787113000.png)
