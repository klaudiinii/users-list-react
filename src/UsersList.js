import React, {Component} from 'react';

class UsersList extends Component {

    _handleDelete(id){
        this.props._handleDelete(id);
    }

    render() { 
    
        return(
            <div id="container">
            <ul>
                {this.props.users.map(user =>
                    <li key={user.id} onClick={() => this.props.deleteUser(user)}>{user.name}</li>
                )}
            </ul>
            </div>
        )
    }
}

export default UsersList;