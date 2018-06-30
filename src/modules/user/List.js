import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ users: state.user.users });

const ConnectedList = ({ users }) => (
    <ul className="list-group list-group-flush">
        {users.map(u => (
            <li className="list-group-item" key={u.id}>
                {u.name}
            </li>
    ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
