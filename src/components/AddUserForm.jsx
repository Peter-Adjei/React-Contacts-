import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            location: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            phone: "",
            location: ""

        });
        // console.log("form Submitted:", this.state);
        // e.preventDefault();
        // this.setState
        // ({

        // }

        // )
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail"><br></br>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"><br></br>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Location" name="location" value={this.state.location} onChange={this.handleChange} />
                    </Form.Group><br></br>

                    <Button variant="primary" type="submit">
                        Add Contact
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddUserForm;
