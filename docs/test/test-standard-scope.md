---
id: test-standard-scope
title: 测试范围
---

:::info
项目中拿些类需要进行单元测试呢? 
单测不是目的,是手段。目的都是保证质量
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

## 一、从项目分层维度设计单测用例

常见的项目分层有一下这些。

- Web层
- Service层
- domain层
- Integration层
- Common层 公用类必须要做


### 1.1 Web层 <Tag>忽略</Tag>

一般web层已经上线不会发生改动,往往改动的是新增或者删除参数。可以忽略。

### 1.2 Service层 <Tag>建议</Tag>

Service层往往是程序的接口层,接受来自Web或者Message、Job的调用。Service的逻辑会覆盖大部分的下游分层。Service是我们的业务入口
接口往往不会改变,改变最多的是它的实现。这一层我们要做好单元测试。


但是这一层的单元测试可能会涉及数据的读写和外部的数据读写。可以使用Mockito数据进行替换外部数据的返回。
内部数据的读写可以通过事务回滚的方式处理,主要验证自己代码中对这些数据的结算逻辑是否有问题。


这一层入参的数据往往会很多,对系统也有相关的依赖,自行评估方案。
这里提供两个曲线救国的方案:
1. 如果不好测试可以对程序的最小单元进行测试,曲线救国。
2. 对某个方法中,不满足测试场景的接口,进行Mockito,以跳过这段逻辑。


### 1.3 Domain层 <Tag>建议</Tag>

这一层和Service的业务是比较相像的,只不过不会有Service层一样那么复杂,参考上文。

### 1.4 Integration层 <Tag>建议</Tag>

防腐层,主要逻辑就是对外部接口的调用,主要测试不要出现NPE。参数的输入值做好非空非null判断,对返回结果做好非空和非null。

```java 
public List<GoodsBaseMsgDTO> querySkuList(Long skuId, Long brandId, String goodsName) {
        if (Objects.isNull(skuId) && Objects.isNull(brandId) && StringUtils.isBlank(goodsName)) {
            // 根据业务来判断是报错还是为空
            return EnhanceStream.emptyList();
        }
        GoodsMsgQueryParam queryParam = new GoodsMsgQueryParam();
        queryParam.setBrandId(brandId);
        queryParam.setSkuId(skuId);
        queryParam.setGoodsName(goodsName);
        JsonResult<PageData<GoodsBaseMsgDTO>> pageDataJsonResult = goodsStockApi.pageQuerySkuList(queryParam);
        PageData<GoodsBaseMsgDTO> pageData = JsonResultUtils.orElseGetSafeData(pageDataJsonResult, new PageData<GoodsBaseMsgDTO>());
        if (Objects.isNull(pageData)) {
            return EnhanceStream.emptyList();
        }
        return pageData.getRecords();
    }
    
public static <T> T orElseGetSafeData(JsonResult<T> result, T defaultValue) {
        if (null != result && result.isSuccess() && Objects.nonNull(result.getData())) {
            return result.getData();
        } else {
            if (Objects.nonNull(result)){
                log.error(result.getMsg());
            }
            return Objects.nonNull(defaultValue) ? defaultValue : null;
        }
}    
```

外部提供的 `Feign` 接口, 在没有提供实现之前可以先使用 `Mockito`进行Mock
帮助完成接口的测试。

```java 
public class TradeShopIntegrationImplTest extends BaseApplicationTest {

    @Autowired
    private TradeShopIntegration shopBrandIntegration;

    @MockBean
    private BrandServiceApi brandService;
    
    @MockBean
    private GoodsStockApi goodsStockApi;
    
    @Test
    public void testGetAllBrands() {
        Mockito.doReturn(JsonResult.failure("fail")).when(goodsStockApi).getSkuList(Mockito.any());
        // 底层调用的是goodsStockApi.getSkuList()
        List<GoodsBaseMsgDTO> goodsBaseMsgDTOS = shopBrandIntegration.queryAllSku();
        // 因为前面声明了返回fail。所以这里没有数据返回。
        JsonConsoleUtils.println(goodsBaseMsgDTOS);
        // 这里跟上面的区别就是,如果没有声明返回值,就走原来的方法。
        List<OutBrandDTO> allBrands = shopBrandIntegration.getAllBrands();
        JsonConsoleUtils.println(allBrands);
    }
    
}    

```

### 1.5 Common层 <Tag>必须</Tag>

这一层基本出现的都是工具类,主要是功能性代码,自己提供的工具类,一定要做好单元测试。主要是考虑
异常情况和极限的情况。工具类因为变动的不会太频繁所以维护成本是也比较低的。

[Mockito学习跳转](https://ddd.springlearn.cn/docs/test/spring-boot-testing)


## 二、针对核心计算逻辑设计单测用例

比较核心的计算逻辑进行测试。比如根据外部数据进行组装生成新的数据模型的方法。

## 三、忽略测试

在实际开发中可能有些测试只是为了验证某些数据,每次执行要提前准备数据之类的。这种特殊的单测,只能人工指定运行的
我们可以忽略它,使用`@Ignore` 忽略。这样在Maven运行单测时候,会只运行你没有进行忽略的单测。
