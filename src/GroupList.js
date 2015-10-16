/**
 * GroupList Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

import classnames from 'classnames';
import Context from 'tingle-context';

class GroupList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const t = this;
        const items = React.Children.map(this.props.children, function (Item) {
            return <li className="tGroupListItem">
                <div className="tGroupListItemInner tHalfPixBottom">{Item}</div>
            </li>;
        });

        return (
            <div className="tGroupList">
                {t.props.title && <div className="tGroupListHeader">{t.props.title}</div>}
                <ul className={classnames({
                    "tGroupListBody": true,
                    [t.props.className]: !!t.props.className
                })} >
                    {items}
                </ul>
            </div>
        );
    }
}

GroupList.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string
};

GroupList.defaultProps = {
    className: '',
    title: ''
};

export default GroupList;
