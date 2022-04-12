# uni-app-study-record
uniapp学习记录

## 学习路线
1. [官方文档](https://uniapp.dcloud.io/)
2. [入门到实战](https://coding.imooc.com/class/521.html)[22小时]
3. CSS部分
    + [CSS基础及入门](https://coding.imooc.com/class/164.html)[11小时]
    + [前端主流布局进阶与实战](https://coding.imooc.com/class/chapter/527.html#Anchor)[16小时]

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
            + 边框
                + 线型，大小，颜色
                + 边框背景图
                + 边框衔接（三角形）
            + 滚动
                + 滚动行为和滚动条
            + 文字折行
                + overflow-wrap 通用换行控制
                    + 是否保留单词 
                + word-break 针对多字节文字
                    + 中文句子也是单词
                + white-space 空白处是否断行
            + 装饰属性：
                + 字重：font-weight
                + 斜体：font-style:itatic
                + 下划线：text-decoration
                + 指针： cursor
        + CSS 布局
            + 布局基础属性：
                + diplay。确定元素的显示类型。
                    + block/ 独立宽高，默认占据一行
                    + inline/默认不占据一行
                    + inline-block/ 对内有自己的宽高，对外不占据一行
                + 确定元素的位置。
                    + static/ 按照文档流
                    + relative/ 偏移大小是相对于元素本身的
                    + absolute/ 脱离文档流，偏移大小是相对于最近的父元素
                    + fixed/ 脱离文档流，相对于可视区域或者屏幕（viewport）
                    + z-index/ 相对于人眼，哪个标签在前
                + flexbox 弹性盒子，盒子本来就是并列的，指定宽度即可。低版本IE不支持
                + float布局。
                    + 脱离文档流，但不脱离文本流
                    + 对自身的影响：形成“块"（BFC）
                    + 位置尽量靠上
                    + 对兄弟元素的影响：上面贴非float元素，旁边贴float元素，不影响其他块级元素位置，影响其他块级元素的文本
                    + 对父级元素的影响：从布局上""消失"
                    + 清除浮动
                + inline-block
                    + 像文本一样排block元素
                    + 没有清除浮动等问题
                    + 需要处理间隙
        + 效果属性
            + box-shadow: 盒子阴影
            + text-shadow: 文本阴影
            + border-radius: 圆角矩形
            + background: 背景
            + clip-path:  
        + CSS 动画
            + 动画的原理：视觉暂留作用。画面的渐变
            + 动画类型
                + transition 补间动画
                + ketframe 关键帧动画。相当于多个补间动画
                + 逐帧动画。适用于无法补间计算的动画 
            
            
                
            
            