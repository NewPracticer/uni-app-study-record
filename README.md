# uni-app-study-record
uniapp学习记录

## 学习路线
1. [官方文档](https://uniapp.dcloud.io/)
2. [入门到实战](https://coding.imooc.com/class/521.html)[22小时]
3. CSS部分
    + [CSS基础及入门](https://coding.imooc.com/class/164.html)[11小时]

## 笔记
+ uniapp
    + 使用vue.js 开发 
    + 在发布到h5时，支持所有的vue语法
    + 发布到app和小程序时，实现部分vue语法
+ uniapp 和小程序的关系
    + 组件标签靠近小程序规范
    + 接口能力靠近微信小程序规范
    + 完整的小程序生命周期 
+ uniapp 核心知识
    + uniapp规范 
        + 页面文件遵循Vue单文件组件SFC规范
        + 组件标签靠近小程序规范
        + 数据绑定及事件处理同Vue.js规范
        + 为兼容多端运行，建议使用Flex布局进行开发
    + uniapp特色
        + 条件编译 
            + ifedf app-plus 仅出现在app平台下的代码
            + ifdef h5 除了h5平台，其他平台均存在的代码
            + ifdef h5||MP-WEIXIN 在h5平台或微信小程序平台存在的代码
        + app端的Nvue开发
        + HTM5+ 
    + 核心知识
        + 模板语法
        + 数据绑定
        + 条件判断 某一个或者说某一块元素是否要渲染 Y 
        + 列表渲染 数据来渲染我们的列表
        + 基础组件的使用
        + 自定义组件的使用
        + 基础api的用法
        + 条件编译
        + 页面布局
        + 生命周期
            + 应用生命周期  
            + 	页面生命周期
            +  	组件生命周期
        + 目录结构 
            + components - 自定义组件的目录
            + pages - 页面存放目录
            + static 静态文件资源目录
            + unpackage  编译后的文件存放目录
            + app.vue 与 app.js 相似
            + main.js 应用入口
            + mainfest.json 项目配置
            + page.json 页面配置
+ CSS (Cascading Style Sheet 层叠样式表)梳理
    + CSS 基础
        + 选择器（ 属性:值 ）
            + 作用
                + 用于匹配HTML元素
                + 有不同的匹配规则
                + 多个选择器可叠加
            + 解析与性能：从右到左，及从小到大进行更快速的解析
            + 分类
                + 元素选择器 a{} 权重 +1 
                + 伪元素选择器 ::before{} 表示一个真实存在的元素的样式 权重 +0
                + 类选择器：.link{}  权重 +10 
                + 属性选择器：[type =radio]{} 权重 +10 
                + 伪类选择器  :hover{} 表示一个元素某种状态的样式 权重 +10
                + ID选择器： #id{}  权重 +100 
                + 组合选择器： [type=checkbox]+label{} 权重 +0
                + 否定选择器   :not(.link){} 权重 +0
                + 通用选择器 *{} 权重 +0
            + 选择器权重
                + !important优先级最高
                + 元素属性 优先级高
                + 相同权重 后写的生效
        + 非布局样式
            + 行高
                + 行高的构成。由一行的linebox决定的，linebox是由inlinebox组成的，inlinebox的高度决定行高的高度
            + 背景
    
            
            