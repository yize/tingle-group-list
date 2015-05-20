import React from 'react';
import {GroupList} from '../src';
import {TextField} from 'tingle-text-field';

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

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
                <GroupList>
                    <TextField label="姓名" placeholder="请输入"
                     value={this.state.name}
                     onChange={this.handleNameChange.bind(this)}/>
                    <TextField label="层级" value="层级" readOnly={true}/>
                </GroupList>
                <GroupList className="foo">
                    <div className="tLH44">aa</div>
                    <div className="tLH44">bb</div>
                    <div className="tLH44">cc</div>
                </GroupList>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));