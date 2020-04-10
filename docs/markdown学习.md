# 一级标题
## 二级标题
### 三级标题
##### 四级标题
###### 五级标题
###### 六级标题
一级标题
======

二级标题
----------
- Red
- Green
- Blue
* Red
* Green
* Blue

+ Red
+ Green
+ Blue
1. Red
2. Green
3. Blue

>换行需要使用连续两个空格或者```<br />```

> 这是一段引用    //在`>`后面有 1 个空格
> 
>     这是引用的代码块形式    //在`>`后面有 5 个空格
>     
> 代码例子：
>   
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

> 一级引用
> > 二级引用
> > > 三级引用

> #### 这是一个四级标题
> 
> 1. 这是第一行列表项
> 2. 这是第二行列表项

**加粗文本** 或者 __加粗文本__

*斜体文本*  或者_斜体文本_

~~删除文本~~

这是行内式链接：[Github Website](https://github.com)。

这是参考式链接：[Github Website][url]，其中url为链接标记，可置于文中任意位置。

[url]: https://github.com/fluidicon.png "Github Website"

链接标记格式为：[链接标记文本]:  链接地址  链接title(可忽略)

这是自动链接：直接使用`<>`括起来<https://github.com>

直接显示图片：![1](https://github.com/fluidicon.png)

这是图片：![][avatar]

[avatar]: https://github.com/fluidicon.png
这是行内代码`onCreate(Bundle savedInstanceState)`的例子。

这是代码块和语法高亮：

``` java
// 注意java前面有空格
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}
```
|标题|标题|标题|
|:---|:---:|---:|
|居左测试文本|居中测试文本|居右测试文本|
|居左测试文本1|居中测试文本2|居右测试文本3|
|居左测试文本11|居中测试文本22|居右测试文本33|
|居左测试文本111|居中测试文本222|居右测试文本333|
***
---
___

* * *
这是一行后面加两个空格  
换行

这是一个脚注的例子[^1]b

[^1]: 这里是脚注

<font face="微软雅黑" color="red" size="6">字体及字体颜色和大小</font>
<font color="#0000ff">字体颜色</font>

使用html标签`<br/>`<br/>换行

<p align="left">居左文本</p>
<p align="center">居中文本</p>
<p align="right">居右文本</p>

<u>下划线文本</u>