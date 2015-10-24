/**
 * GroupList Component Demo for tingle
 * @author jiasong.js
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const GroupList = require('../src');

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
            <div className='tFS14'>
                <div className='tBCe tFS20 tFAC tLH2'>tingle-group-list demo</div>
                <div className='tBCe tFS12 tLH2'>默认样式</div>
                <GroupList>
                    <div>GroupList是一个容器类组件</div>
                    <div>Ite默认最小高度是44px，以满足大多数场景</div>
                </GroupList>
                <GroupList>
                    <div>当两个GroupList相邻时，后一个无上边框</div>
                </GroupList>
                <div className='tBCe tFS12 tLH2'>自定义间隔线左缩进</div>
                <GroupList className='customLineIndent'>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                </GroupList>
                <div className='tBCe tFS12 tLH2'>自定义间隔线左右缩进</div>
                <GroupList className='customLineIndent2'>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                </GroupList>
            </div>
        );
    }
}
module.exports = Demo;
