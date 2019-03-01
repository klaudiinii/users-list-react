import React, { Component } from 'react';
import UsersList from './UsersList';

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            users: []
        }
       
    }

    handleOnChange = (event) => {
   
        this.setState({
          inputValue: event.target.value
        })
       
      }


      handleOnClick = (event) => {
   
        event.preventDefault() //blokowanie odswiezania strony

        let usersLocal = this.state.users; //pobieramy ilosc dotychczasowych userow

        let newUser = {  // potrzebne do edytowania i usuwania (id)
            id: Date.now(),
            name: this.state.inputValue
        }
        
        usersLocal.push(newUser) //dodajemy nowego usera do lokalnej instancji this.state.users

        this.setState({ //update globalnej instancji this.state.users
            inputValue: '',
            users: usersLocal
        })
       
      }

      deleteUser = (user) => {
        
        let usersLocal = this.state.users
        usersLocal = usersLocal.filter(userFromFilter => userFromFilter.id !== user.id)

        this.setState({users: usersLocal});
    }

      
  render() {
      
    return (
        <>
        <h1>User's list</h1>
        <input placeholder="Enter name..." type="text" value={this.state.inputValue} onChange={this.handleOnChange}/>
        <button onClick={this.handleOnClick}>Add user</button>
        <UsersList users={this.state.users} deleteUser={this.deleteUser}/>
        </>
    );
  }

  }

  




export default Users;
