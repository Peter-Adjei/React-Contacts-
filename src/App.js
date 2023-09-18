import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Peter",
          phone: "0244444444",
          location: "Adenta",
          id: "gfklnit4jgi45jy"
        },
        {
          name: "Edmund",
          phone: "059999999",
          location: "Frafraha",
          id: "rtgrgrjgrkegort5854"
        },
        {
          name: "Lawrence",
          phone: "02777777777",
          location: "Madina",
          id: "gw;dkfeorgirorkm65"
        },

      ]
    }
  }

  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: undeletedUsers
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })

  }

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser} />
            </Col>
          </Row>
        </Container>


      </>
    );
  }
}

export default App;
