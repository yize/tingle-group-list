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
                <GroupList title={"默认样式"}>
                    <div className="demo">aa</div>
                    <div className="demo">bb</div>
                    <div className="demo">cc</div>
                </GroupList>
                <GroupList title={"默认样式"}>
                    <div className="demo">aa</div>
                    <div className="demo">bb</div>
                    <div className="demo">cc</div>
                </GroupList>
                <GroupList>
                    <div className="demo">aa</div>
                    <div className="demo">bb</div>
                    <div className="demo">cc</div>
                </GroupList>
            </div>
        );
    }
}
module.exports = Demo;
