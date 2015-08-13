# GroupList 列表

- name: tingle-group-list
- category: tingle
- caption: true
- order: 0
- tags: mobile,H5,手机,移动,
- description: 常用的列表 Group 区块。提供基础的样式布局。 
- maintainers: jiasong.js

---

## tingle-group-list [![Dependency Status](http://img.shields.io/david/tinglejs/tingle-group-list.svg?style=flat-square)](https://david-dm.org/tinglejs/tingle-group-list) [![devDependency Status](http://img.shields.io/david/dev/tinglejs/tingle-group-list.svg?style=flat-square)](https://david-dm.org/tinglejs/tingle-group-list#info=devDependencies) [![Bower version](https://badge.fury.io/bo/tingle-group-list.svg)](http://badge.fury.io/bo/tingle-group-list)

[![tingle-group-list](https://nodei.co/npm/tingle-group-list.png)](https://npmjs.org/package/tingle-group-list)

## TL;DR

GroupList 是常用的列表 Group 区块。提供基础的样式布局。

![效果图](http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/alinwmobile/tingle/1e5d0ac94f/image.png)

## Best Practice 最佳实践

这是一个 tingle 组件，使用请参考[这里](http://gitlab.alibaba-inc.com/alinwmobile/tingle/tree/master)。

### Simple Usage

```
handleNameChange(newValue) {
    this.setState({
        name: newValue
    });
}

render() {
    return (
        <div>
            <GroupList className="foo" title={"默认样式"}>
                <div className="tLH44 tPL10">aa</div>
                <div className="tLH44 tPL10">bb</div>
                <div className="tLH44 tPL10">cc</div>
            </GroupList>
            <GroupList itemIndent={10} title={"设置分割线10px缩进"}>
                <TextField label="姓名" placeholder="请输入"
                 value={this.state.name}
                 onChange={this.handleNameChange.bind(this)}/>
                <TextField label="层级" value="层级" readOnly={true}/>
            </GroupList>
        </div>
    );
}
```

### 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|title|optional|-|GroupList 的标题|
|itemIndent|optional|-| 列表的padding-left |

## Links 相关链接

- [Fire a bug/Issues 提Bug](http://gitlab.alibaba-inc.com/alinwmobile/tingle-group-list/issues)
- [Tingle项目](http://gitlab.alibaba-inc.com/alinwmobile/tingle/tree/master)