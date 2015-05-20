import React from 'react';
import {GroupList} from '../src';

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

var ua = navigator.userAgent;
var isChrome = !!window.chrome;
var isAndroid = /android/i.test(ua);
var isIOS = /iP(ad|hone|od)/.test(ua);
var isMobile = !!ua.match(/mobile/i);
var isPC = !isMobile;

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        var t = this;
        var cls = React.addons.classSet;
        return (
            <div className={cls({
                "demo": true,
                "isNotChrome": !isChrome,
                "isAndroid": isAndroid
            })}>
                <GroupList>
                    <div className="tTextField tPR10 tFBH tFBAC">
                        <div className="tMR10">姓名</div>
                        <div className="tFB1">
                            <input className="tInput" placeholder="请输入"
                             type="text"/>
                        </div>
                    </div>
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