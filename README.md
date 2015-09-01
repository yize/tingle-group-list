# tingle-group-list [![npm version](https://badge.fury.io/js/tingle-group-list.svg)](http://badge.fury.io/js/tingle-group-list)

## TL;DR

GroupList 是常用的列表 Group 区块。提供基础的样式布局。

![效果图](https://img.alicdn.com/tps/TB1DXdYJpXXXXcHXXXXXXXXXXXX-746-1262.png_400x400.jpg)

## Simple Usage

```
render() {
    return (
        <div>
            <GroupList itemIndent={40} title={"默认样式"}>
                <div className="demo">aa</div>
                <div className="demo">bb</div>
                <div className="demo">cc</div>
            </GroupList>
            <GroupList itemIndent={40} title={"默认样式"}>
                <div className="demo">aa</div>
                <div className="demo">bb</div>
                <div className="demo">cc</div>
            </GroupList>
        </div>
    );
}
```

## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|title|optional|-|GroupList 的标题|
|itemIndent|optional|40| 列表的padding-left , rem 方案，40为在 iPhone 6 上的宽 |

## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-group-list/issues)