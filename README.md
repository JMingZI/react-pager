# react-pager
react服务端分页组件，（静态分页尚未实现）

轮子实现的功能：

+ 服务端分页
+ js静态分页

效果图：
![demo](./demo.png)

功能说明：

+ 可跳页
+ 当页数很多时，最多只展示5个可点击按钮，例如

<pre>
    首页 上一页 ... 2 3 4 5 6 ... 下一页 尾页
</pre>

使用方法：

Pager分页组件接收4个`props`：

```
    total           // 数据的总数
    pageSize        // 每一页数量
    currentPage     // 当前第几页
    updatePage      // 点击回调函数，接收一个参数page，表示点击的第几页
```

可拓展性：

可修改相应的配置参数

```js
    this.options = {
        'first': '首页',
        'prev': '上一页',
        'next': '下一页',
        'last': '尾页',
        'skip': '跳转'
    }    
```
