/**
 * GroupList Component Demo for tingle
 * @auther gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var GroupList = require('../src');
var TextField = require('tingle-text-field');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

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
};

module.exports = Demo;