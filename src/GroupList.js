
class GroupList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var t = this;
        var cls = React.addons.classSet;
        var items = React.Children.map(this.props.children ,function (Item, index) {
            return <li className="tGroupListItem">{Item}</li>;
        });

        return (
            <ul className={cls({
                'tGroupList': true,
                [t.props.className]: !!t.props.className
            })}>
                {items}
            </ul>
        );
    }
}

GroupList.defaultProps = {
}

module.exports = GroupList;