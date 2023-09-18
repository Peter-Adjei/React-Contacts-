import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            phone: props.userInfo.phone,
            location: props.userInfo.location,
            id: props.userInfo.id
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
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name: "",
            phone: "",
            location: ""
        });
        this.props.closeModal()
        // console.log("form Submitted:", this.state);
        // e.preventDefault();
        // this.setState
        // ({

        // }

        // )
    };

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
                        <Form.Control type="number" placeholder="Enter phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"><br></br>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter your location" name="location" value={this.state.location} onChange={this.handleChange} />
                    </Form.Group><br></br>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditUserForm;
