/**
 * GroupList Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const {createStyleContext, unitize} = require('tingle-style');
const styleContext = createStyleContext('tGroupList');

class GroupList extends React.Component {

    constructor(props) {
        super(props);
        let t = this;
        t.state = {
            lineLndentClassName: []
        };

        if (props.lineIndent) {
            let lineIndentArray;
            if (Array.isArray(props.lineIndent)) {
                lineIndentArray = props.lineIndent;
            } else {
                lineIndentArray = [].concat(props.lineIndent);
            }

            t.addLineIndentStyle('Left', unitize(lineIndentArray[0]));
            t.addLineIndentStyle('Right', unitize(lineIndentArray[1]));

            t.state.lineIndentClassName = t.state.lineLndentClassName.join(' ');
            console.log(t.state.lineIndentClassName);
        }
    }

    addLineIndentStyle(side, value) {
        if (!value) {
            return;
        }
        let t = this;
        t.state.lineLndentClassName.push(`lineIndet${side}${value}`);
        styleContext.addRule(`
            .tGroupList.lineIndet${side}${value} .tGroupListItem:after{
                ${side}: ${value}
            }
        `);
    }

    render() {
        let t = this;

        return (
            <div className={classnames('tGroupList', {
                [t.props.className]: !!t.props.className,
                [t.state.lineIndentClassName]: !!t.state.lineIndentClassName
            })}>
                {React.Children.map(t.props.children, function (Item) {
                    return <div className='tGroupListItem tFBH tFBAC'>
                        {Item}
                    </div>;
                })}
            </div>
        );
    }
}

GroupList.propTypes = {
    className: React.PropTypes.string,
    lineIndent: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
        React.PropTypes.array
    ])
};

GroupList.defaultProps = {
};

export default GroupList;
