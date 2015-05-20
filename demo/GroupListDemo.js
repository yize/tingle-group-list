import React from 'react';
import {GroupList} from '../src';

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <GroupList>
                    <div className="tLH44">aa</div>
                    <div className="tLH44">bb</div>
                    <div className="tLH44">cc</div>
                </GroupList>
                <GroupList>
                    <div className="tLH44">aa</div>
                    <div className="tLH44">bb</div>
                    <div className="tLH44">cc</div>
                </GroupList>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));