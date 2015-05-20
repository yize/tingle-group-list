import React from 'react';

class GroupList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var items = React.Children.map(this.props.children ,function (Item, index) {
            return <li className="tGroupListItem">{Item}</li>;
        });

        return (
            <ul className="tGroupList">
                {items}
            </ul>
        );
    }
}

GroupList.defaultProps = {

}

export {GroupList};