/**
 * GroupList Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const {createStyleContext} = require('./css-util');

let style = createStyleContext('tGroupListStyleEl');

style.addRule('a', `
            body{
                background-color: red;
            }
`);

style.addRule('b', `
    body{
        font-size: 30px;
    }
`);

class GroupList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let t = this;
        return (
            <div className={classnames('tGroupList', {
                [t.props.className]: !!t.props.className
            })}>
                {React.Children.map(t.props.children, function (Item) {
                    return <div className='tGroupListItem tFBH tFBAC'>{Item}</div>;
                })}
            </div>
        );
    }
}

GroupList.propTypes = {
    className: React.PropTypes.string
};

GroupList.defaultProps = {
    className: ''
};

export default GroupList;
