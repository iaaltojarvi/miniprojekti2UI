import React, { Component } from 'react'
import Categories from './Categories';
import ThreadContainer from './ThreadContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SelectionView.css';
import AddThread from './AddThread';

// TODO: getter method for available categories from database
const availableCategories = [{ "id": "1", "category": 'All categories' }, { "id": "2", "category": 'JavaScript' }, { "id": "3", "category": 'ReactJS' }, { "id": "4", "category": 'NodeJS' }, { "id": "5", "category": 'PostgreSQL' }];

export default class SelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = { category: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newCategory) {
    this.setState({ category: newCategory });
  }

  async componentDidMount() {
    let res = await fetch('/api/categories');
    let jsonRes = await res.json();
    console.log(jsonRes);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <AddThread listContent={availableCategories} />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Categories onClick={this.handleUpdate} listContent={availableCategories} />
          </Col>
          <Col lg={9}>
            <ThreadContainer category={this.state.category} />
          </Col>
        </Row>
      </Container>
    )
  }
}