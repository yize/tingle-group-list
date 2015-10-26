/**
 * GroupList Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const Context = require('tingle-context');

class GroupList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const t = this;
        const items = React.Children.map(this.props.children ,function (Item, index) {
            return <li className="tGroupListItem">{Item}</li>;
        });

        const itemIndent = t.props.itemIndent;
        return (
            <div>
                {t.props.title && <h4 className="tGroupListHeader">{t.props.title}</h4>}
                <ul className={classnames({
                    tGroupList: true,
                    [t.props.className]: !!t.props.className
                })} style={{
                    paddingLeft: itemIndent
                }}>
                    {items}
                </ul>
            </div>
        );
    }
}

GroupList.propTypes = {
    itemIndent: React.PropTypes.number
};

GroupList.defaultProps = {
    itemIndent: 15
};

module.exports = GroupList;