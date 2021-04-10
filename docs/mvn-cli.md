---
id: 'mvn-cli'
sidebar_label: 简介
---


:::tip

ACCESS-CLI 快速构建Maven多模块应用

:::



## 背景 & 目标


目标打造成为满足Access集团开发需求,  简单好用的 Java 服务脚手架工具

工具围绕几个方面进行开发, 力求在以下方面提高开发的工作效率, 同时同过脚手架的方式从一开始就统一下项目结构和模型。


- 深度定制 (定制公司标准的项目结构)
- 快速构建标准的Maven多模块服务
- 支持数据库模型快速安装 (一次配置终生使用, 多快好省)
- 数据库模型文档一键导出 (每次表结构变更, 快速导出最新表文档)



## 一、介绍 | Introduce


![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1614239831187-bba55ce6-d290-44df-a3ba-eb727f0959ad.png#align=left&display=inline&height=471&margin=%5Bobject%20Object%5D&name=image.png&originHeight=471&originWidth=1243&size=117107&status=done&style=none&width=1243)




快速构建支持SpringBoot的Maven多模块应用,启动及快速打包部署


- 支持Maven多模块构建、
- 数据库模型安装、
- 数据库模型导出),
- 统一项目规范,
- 提高工作效率,
- 可进行深度定制。




## 二、快速安装 | Fast installation


### 2.1 Node环境安装


[Window下载 ](https://nodejs.org/dist/v14.15.5/node-v14.15.5-x64.msi)           
[Mac下载](https://nodejs.org/dist/v15.9.0/node-v15.9.0.pkg)


### 2.2 下载


**公司 ****`npm`**** 私服（VPN登陆下载）**


```java
# 登陆公司npm仓库
➜ npm config set registry=http://nexus.danchuangglobal.com/repository/npm-group/

# 通过公司VPN账号获取下载权限
➜ npm login

# 下载脚手架工具
➜ npm i -g @access/jmvn
```


## 三、功能介绍


### 3.1 快速构建 | To quickly build


#### 3.1.1 命令行构建项目 | Command line build


![](https://cdn.nlark.com/yuque/0/2021/png/182855/1614239511116-6ae8a114-b59f-4fec-96ac-aa5c79a6a547.png#align=left&display=inline&height=924&margin=%5Bobject%20Object%5D&originHeight=924&originWidth=1798&size=0&status=done&style=none&width=1798)


```
ℹ Build:sacc/sacc-web/src/main/java/com/idanchuang/sacc/web/
ℹ Build:sacc/sacc-web/src/main/resources/
ℹ MavenHooks webPath:sacc/sacc-web/src/main/java/com/idanchuang/sacc/web/
✔ Build: Add SpringBoot Config:sacc/sacc-web/src/main/resources/application.yml
ℹ Build:sacc/sacc-service/src/main/java/com/idanchuang/sacc/service/
ℹ Build:sacc/sacc-service/src/main/resources/
ℹ MavenHooks servicePath:sacc/sacc-service/src/main/java/com/idanchuang/sacc/service/
ℹ Build:sacc/sacc-domain/src/main/java/com/idanchuang/sacc/domain/
ℹ Build:sacc/sacc-domain/src/main/resources/
ℹ MavenHooks domainPath:sacc/sacc-domain/src/main/java/com/idanchuang/sacc/domain/
ℹ Build:sacc/sacc-dal/src/main/java/com/idanchuang/sacc/dal/
ℹ Build:sacc/sacc-dal/src/main/resources/
ℹ MavenHooks dalPath:sacc/sacc-dal/src/main/java/com/idanchuang/sacc/dal/
ℹ Build:sacc/sacc-integration/src/main/java/com/idanchuang/sacc/integration/
ℹ Build:sacc/sacc-integration/src/main/resources/
ℹ MavenHooks integrationPath:sacc/sacc-integration/src/main/java/com/idanchuang/sacc/integration/
ℹ Build:sacc/sacc-config/src/main/java/com/idanchuang/sacc/config/
ℹ Build:sacc/sacc-config/src/main/resources/
ℹ MavenHooks configPath:sacc/sacc-config/src/main/java/com/idanchuang/sacc/config/
ℹ Build:sacc/sacc-common/src/main/java/com/idanchuang/sacc/common/
ℹ Build:sacc/sacc-common/src/main/resources/
ℹ MavenHooks commonPath:sacc/sacc-common/src/main/java/com/idanchuang/sacc/common/
                                                  _  _ 
     /\                                          | |(_)
    /  \    ___  ___  ___  ___  ___  ______  ___ | | _ 
   / /\ \  / __|/ __|/ _ \/ __|/ __||______|/ __|| || |
  / ____ \| (__| (__|  __/\__ \\__ \       | (__ | || |
 /_/    \_\\___|\___|\___||___/|___/        \___||_||_|    Application sacc Build Success

✔ 🚀 ACCESS CLI v1.0.0
┌────────┬────────┬──────────┬────────────────┬──────────────┬────────┐
│ 项目名 │ 作者   │ 项目版本 │ SpringBoot版本 │ 描述         │ 端口号 │
├────────┼────────┼──────────┼────────────────┼──────────────┼────────┤
│ sacc   │ liuxin │ 1.0.0    │ 0.5.1-RELEASE  │ 测试项目工程 │ 8081   │
└────────┴────────┴──────────┴────────────────┴──────────────┴────────┘
```


#### 3.1.2 idea直接打开 | Use idea to open


- 可以点击 `run main` 启动
  ![](https://cdn.nlark.com/yuque/0/2021/png/182855/1614239510737-eb39b819-d291-48cf-ab9c-ed76494b28d9.png#align=left&display=inline&height=835&margin=%5Bobject%20Object%5D&originHeight=835&originWidth=1347&size=0&status=done&style=none&width=1347)



#### 3.1.3 打包jar文件部署 | Package JAR deployment


- 输入 `mvn package` 快速打包构建部署



```
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] ascm ............................................... SUCCESS [  0.364 s]
[INFO] ascm-common ........................................ SUCCESS [  0.842 s]
[INFO] ascm-integration ................................... SUCCESS [  0.040 s]
[INFO] ascm-dal ........................................... SUCCESS [  0.038 s]
[INFO] ascm-domain ........................................ SUCCESS [  0.038 s]
[INFO] ascm-service ....................................... SUCCESS [  0.037 s]
[INFO] ascm-web ........................................... SUCCESS [  1.274 s]
[INFO] ascm-config ........................................ SUCCESS [  0.038 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 3.292 s
[INFO] Finished at: 2021-01-18T20:36:03+08:00
[INFO] Final Memory: 46M/356M
[INFO] ------------------------------------------------------------------------
```


- 进入 `web/target` 目录直接运行启动 `java -jar ascm-web.jar`



### 3.2 安装数据库库模型 | Install the database library model


#### 3.2.1 配置安装信息 | Configure installation information


- 配置项目开发数据库地址
- 配置模型命名规则及安装目录



```java
  "dbConfig": {
    "host": "10.*.*.121",
    "user": "o*test",
    "password": "9G****RZ",
    "database": "***"
  },
  "models": [
    {
      "suffix": "DO",
      "tableName": [
        "w_order",
        "w_push_order"
      ],
      "path": "scm-dao/src/main/java/com/idanchuang/scm/dao/entity/Do"
    }
  ]
```


#### 3.2.2 执行命令 | Execute the command


![](https://cdn.nlark.com/yuque/0/2021/png/182855/1614239511206-4697a4e7-1906-4075-bf6e-f2b53c1219d9.png#align=left&display=inline&height=321&margin=%5Bobject%20Object%5D&originHeight=321&originWidth=1400&size=0&status=done&style=none&width=1400)


```
access i
```


如果你是深度命令行换着,你也可以通过纯命令安装


```
➜ access help i
ACCESS CLI v1.0.0
Usage: access install|i [options]

安装数据模型

Options:
  -i, --tables [String]  要安装的表模型名称(可以使用,分隔)
  -s, --suffix [String]  模型后缀名 (default: false)
  -p, --path [String]    要安装的路径地址(相对路径) (default: false)
  -h, --help             display help for command
```




### 3.3 导出数据模型文档 | Export data model documents


为了方便我们写技术文档, 支持直接导出成 markdown 格式文档。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1614256691121-fba79227-d665-47c0-ad73-33ba135569fa.png#align=left&display=inline&height=1120&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1120&originWidth=1960&size=362372&status=done&style=none&width=1960)






## 四、发布记录 | Release record


**1.0.1**


- 构建服务
- 支持注册命令



**1.0.2**


- 代码精简及优化
- 版本检测及升级



**1.0.3**


- fix端口号映射问题



**1.0.4**


- 优化版本检测,在网络差场景的用户体验



## 五、定制 | Custom




为了达到深度定制的能力, 你所看到的一切都是可配置的。在模块每一层创建的同时也提供了钩子方法。允许你在钩子节点去做定制开发。`**[MavenHooks.js](http://git.idanchuang.net/liuxin/access-cli/blob/master/action/MavenHooks.js)**`


欢迎感兴趣的小伙伴一起参与开发, 🚀 `call me！`


- 微信: `lxchinesszz`
- 邮箱: `lxchinesszz@163.com`
## 六、扩展知识 | Expand the knowledge


- [代码命名规范参考建议](https://danchuang.yuque.com/nlmewm/tsxuer/wet7a6)



项目结构设计支持配置, 在配置前请确定你的编程方法论和价值观。以下文档仅供参考。也是当前工具所保持的价值观。


### 6.1 分层命名 | Hierarchical naming


明确业务分层架构，定义领取模型, 编程不迷茫。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1614240669983-94a9859a-fdfc-4dd4-858f-0fb94a6fdea0.png#align=left&display=inline&height=750&margin=%5Bobject%20Object%5D&name=image.png&originHeight=750&originWidth=1915&size=234498&status=done&style=none&width=1915)


### 6.2 数据模型规范 | Data model specification


迪米特法则: 不要和陌生人说话,数据模型之间保持最少的了解
迪米特法则: 不要和陌生人说话,数据模型之间保持最少的了
![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1614240759057-8aaf2bec-0420-4a58-82cd-cb3f9da78e5a.png#align=left&display=inline&height=794&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1916&size=354743&status=done&style=none&width=1916)




# 七、插件开发 | Plug-in development


脚手架工具会将在每个 `Maven Module` 创建过程中去发出不同对应的事件,  插件开发者可以不同的事件类型来开发插件。
## 7.1 事件类型 | The event type
| 事件类型 | 事件说明 | 环境信息 |
| --- | --- | --- |
| BUILD_BEFORE | _构建前触发_ |  |
| BUILD_WEB | _构建web层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_SERVICE | _构建service层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_DOMAIN | _构建domain层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_DAL | _构建dal层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_INTEGRATION | 构建integration层触发 | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_CONFIG | _构建config层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_COMMON | _构建common通用层触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_COMPLETE | _构建完成触发_ | {
"namespace":Array[7],
"config":Object,
"dbConfig":Object,
"models":Array[1],
"projectConfig":Object
} |
| BUILD_JAVA_RESOURCE | _构建java资源文件时候触发_ | {
projectConfig: Object,
currentPath: ''
} |
| BUILD_JAVA_WEB_RESOURCE | _构建java, Web资源文件时候触发_ | {
projectConfig: Object,
currentPath: ''
} |



## 7.2 插件生命周期函数 | Life cycle function


![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1615196489742-09523709-e8b7-48b5-ac9b-749609ae7647.png#align=left&display=inline&height=287&margin=%5Bobject%20Object%5D&name=image.png&originHeight=287&originWidth=992&size=29091&status=done&style=none&width=992)


## 7.3 插件开发示例 | The sample


### 7.3.1 创建目录 | Create a directory


`plugins` 目录下创建插件子目录


### 7.3.2 实现插件生命周期函数 | Write a function


插件支持before、invoke、error、after。插件的核心逻辑在invoke，可以直接实现该方法即可。


所有的声明周期函数都有且只有一个入参，但是不同事件入参信息是不一样的，可以参考 7.1 事件类型, 参数说明。


```javascript
// 方式1: 仅仅实现核心逻辑,不关注生命周期函数
new Plugin('GitIgnore', 'GitIgnore创建', PluginEventType.BUILD_COMPLETE, new GitAction().createGitIgnoreFile);

// 方式2: 通过方法重写方式实现,生命周期方法
let plugin2 = new Plugin('GitIgnore', 'GitIgnore创建', PluginEventType.BUILD_COMPLETE);

plugin2.before = function(envConfig){
	console.log('插件before')
}

plugin2.after  = function(envConfig){
	console.log('插件before')
}
```


### 7.3.3 注册开发好的插件 | To register the plugin


`plugins.Install.js`  进行注册
```javascript
/**
 * 定义插件
 *
 * before->invoke->success->after
 * error异常捕捉执行
 * @param name 插件名称
 * @param desc 插件说明
 * @param type 插件类型
 * @param action 插件核心逻辑
 * @constructor
 */
function Plugin(name, desc, type, action) {}

// 注册一个git忽略文件插件,接受maven构建完成事件
Plugins.register(new Plugin('GitIgnore', 'GitIgnore创建', PluginEventType.BUILD_COMPLETE, new GitAction().createGitIgnoreFile))
```


### 7.3.4 完整的参数入参 | Parameters for details


- 项目名称 `tests` 为例
```json
{
    "namespace":[
        {
            "type":"web",
            "path":"tests/tests-web/src/main/java/com/idanchuang/tests/web/",
            "packagePath":"com/idanchuang/tests/web"
        },
        {
            "type":"service",
            "path":"tests/tests-service/src/main/java/com/idanchuang/tests/service/",
            "packagePath":"com/idanchuang/tests/service"
        },
        {
            "type":"domain",
            "path":"tests/tests-domain/src/main/java/com/idanchuang/tests/domain/",
            "packagePath":"com/idanchuang/tests/domain"
        },
        {
            "type":"dal",
            "path":"tests/tests-dal/src/main/java/com/idanchuang/tests/dal/",
            "packagePath":"com/idanchuang/tests/dal"
        },
        {
            "type":"integration",
            "path":"tests/tests-integration/src/main/java/com/idanchuang/tests/integration/",
            "packagePath":"com/idanchuang/tests/integration"
        },
        {
            "type":"config",
            "path":"tests/tests-config/src/main/java/com/idanchuang/tests/config/",
            "packagePath":"com/idanchuang/tests/config"
        },
        {
            "type":"common",
            "path":"tests/tests-common/src/main/java/com/idanchuang/tests/common/",
            "packagePath":"com/idanchuang/tests/common"
        }
    ],
    "config":{
        "_projectName":"tests",
        "_web":"web",
        "_biz":"service",
        "_domain":"domain",
        "_dal":"dal",
        "_integration":"integration",
        "_config":"config",
        "_common":"common",
        "_groupId":"com.idanchuang",
        "_projectVersion":"1.0.0",
        "_projectDescription":"description",
        "_springBootVersion":"0.5.1-RELEASE"
    },
    "projectConfig":{
        "projectName":"tests",
        "web":"web",
        "biz":"service",
        "domain":"domain",
        "dal":"dal",
        "integration":"integration",
        "config":"config",
        "common":"common",
        "groupId":"com.idanchuang",
        "projectVersion":"1.0.0",
        "mavenSurefireJavaVersion":"1.8",
        "projectDescription":"description",
        "springBootVersion":"0.5.1-RELEASE",
        "port":"8081",
        "projectAuthor":"mvn-cli",
        "modelFlag":true
    }
}
```


## 7.4 插件测试 | Plug-in Test


      配置完成即可进行 `debug` 
![image.png](https://cdn.nlark.com/yuque/0/2021/png/182855/1615198487520-d4cf59f5-0a4e-4e00-bb22-23a0ec601610.png#align=left&display=inline&height=837&margin=%5Bobject%20Object%5D&name=image.png&originHeight=837&originWidth=1511&size=243024&status=done&style=none&width=1511)
