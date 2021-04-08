---
id: test-data-isolation
title: ③ 数据隔离
---

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '5px',
color: '#fff',
padding: '0.2rem',
}}>
{children}
</span>
);


:::info 数据隔离

数据隔离一直是一个测试的痛点，测试数据可能是 `mock` 的数据,所以单测过程中,难免会造成脏数据
这种场景,有通用的解决方案。`JUnit` 已经帮我们做好了。这里我们只讲实操和用法。
如果有兴趣的话可以研究下 <Highlight>TransactionalTestExecutionListener</Highlight>
:::


## 解决方案

:::note 单测引导类配置说明
- @Transactional 如果加上这个注解,就代表全局的单测,事务执行完都会自动回滚
- @Rollback(false) 如果想某个方法事务不回滚,可以单独在方法上设置。<Highlight color="#25c2a0">【方法级别>全局】</Highlight>
:::

```java title="单测引导类配置"
@Slf4j
@ActiveProfiles({"local"})
// 使用Spring容器引导
@RunWith(SpringRunner.class)
// 默认就是回滚,不用加@Rollback,如果全局不想回滚就在这个吧@Rollback(false),如果某个单测不想回滚,就放到单侧类上
@Transactional
@SpringBootTest(classes = {CenterProviderApplication.class}) // 指定启动类
public class BaseApplicationTest {

    // 全局事务,默认自动回滚
    @Test
    public void testInsert() {
        String json = "{\n" +
                "  \"id\": 1344215264312557570,\n" +
                "  \"arrivalOrderId\": 1344215264287391745,\n" +
                "  \"goodsDeployId\": 1344170561282879489,\n" +
                "  \"expectedReceiveNum\": 150,\n" +
                "}";
        OrderDetailDO orderDetail = TestConsole.toObject(json, ArrivalNoticeOrderDetailDO.class);
        orderDetail.setId(null);
        orderDetail.setCreaterId(888888L);
        // true
        Assert.assertTrue(DB.insert(orderDetail) > 0);
        // notNull
        Assert.assertNotNull(DB.selectById(orderDetail.getId()));
    }
    
    // 方法事务>全局事务, 这里声明了不自动回滚
    @Test
    @Rollback(value = false)
    public void testInsert() {
        String json = "{\n" +
                "  \"id\": 1344215264312557570,\n" +
                "  \"arrivalOrderId\": 1344215264287391745,\n" +
                "  \"goodsDeployId\": 1344170561282879489,\n" +
                "  \"expectedReceiveNum\": 150,\n" +
                "}";
        OrderDetailDO orderDetail = TestConsole.toObject(json, ArrivalNoticeOrderDetailDO.class);
        orderDetail.setId(null);
        orderDetail.setCreaterId(888888L);
        // true
        Assert.assertTrue(DB.insert(orderDetail) > 0);
        // notNull
        Assert.assertNotNull(DB.selectById(orderDetail.getId()));
    }
}
```


