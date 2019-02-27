import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class AddThread extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        return (
            <div>
                <Button variant="secondary" size="lg" onClick={this.handleShow}>Add New Thread!</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Thread</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Write header</Form.Label>
                                <Form.Control type="text" placeholder="Topic" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select category</Form.Label>
                                <Form.Control as="select">
                                    <option>JavaScript</option>
                                    <option>NodeJS</option>
                                    <option>ReactJS</option>
                                    <option>Databases</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleClose} type="submit">Start new thread</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
