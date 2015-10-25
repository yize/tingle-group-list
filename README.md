# tingle-group-list [![npm version](https://badge.fury.io/js/tingle-group-list.svg)](http://badge.fury.io/js/tingle-group-list)



`GroupList`是列表容器组件。封装了以下功能：

* 灵活配置间隔线的缩进值，使`IOS`和`Material`风格的多样列表更加容易实现。
* 在支持`hairline`显示的设备上自动优化显示成极细的线。

## Preview

<img src="https://img.alicdn.com/tps/TB1A_L7JpXXXXXdXpXXXXXXXXXX-750-1254.png" width="375"/>

## Usage

使用方式很简单，把要展现的列表元素做为`GroupList`的子元素即可。

```js
let {GroupList} = Tingle;
...
render() {
    return (
        <GroupList>
            <div>aa</div>
            <div>bb</div>
            <div>cc</div>
        </GroupList>
    );
}
```


## Props

#### className

添加扩展的样式类。

* 可选
* 默认值：无
* 类型：String

示例：

```js
render() {
    return (
        <GroupList className="customStyle">...</GroupList>
    );
}
```

#### lineIndent

配置间隔线的缩进值。

* 可选
* 默认值：无
* 类型：
  - Number：设置左缩进，默认追加`px`作为单位，如：`10`
  - String：设置左缩进，自定义长度单位，如：`1rem`
  - Array: 设置左右缩进，数组成员的类型为`Number`或`String`，默认处理如上。

示例：

```js
render() {
    return (<div>
        <GroupList lineIndent={10}>...</GroupList>
        <GroupList lineIndent={'1rem'}>...</GroupList>
        <GroupList lineIndent={[20, 20]}>...</GroupList>
        <GroupList lineIndent={['10px', '10px']}>...</GroupList>
    </div>);
}
```

## Updates

0.3.0

* 从`0.3.0`开始，不再支持`title`配置。
* 删除了`itemIndent`配置。
* 添加了`lineIndent`配置。

## Links

- [Issues](http://github.com/tinglejs/tingle-group-list/issues)
