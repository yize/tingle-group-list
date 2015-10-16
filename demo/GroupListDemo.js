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
            <div>
                <GroupList title={"GroupListHeader"}>
                    <span>aa</span>
                    <span>bb</span>
                    <span>cc</span>
                </GroupList>
                <GroupList title={"默认样式"}>
                    <span>aa</span>
                    <span>bb</span>
                    <span>cc</span>
                </GroupList>
                <GroupList>
                    <span>aa</span>
                    <span>bb</span>
                    <span>cc</span>
                </GroupList>
            </div>
        );
    }
}
module.exports = Demo;
