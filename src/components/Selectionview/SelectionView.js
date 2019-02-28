import React, { Component } from 'react'
import Categories from './Categories';
import ThreadContainer from './ThreadContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SelectionView.css';
import AddThread from './AddThread';

export default class SelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = { category: '', uniqueCategories: '', allThreads: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.getContentByCategory = this.getContentByCategory.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  handleUpdate(newCategory) {
    this.getContentByCategory(newCategory)
  }

  async getContentByCategory(newCategory) {
    if (newCategory) {
      let res = await fetch('/api/categories/' + newCategory);
      let jsonRes = await res.json();
      this.setState({ allThreads: jsonRes, category: newCategory });
    } else {
      this.getAll();
    }
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    let res = await fetch('/api/categories');
    let jsonRes = await res.json();
    let uniqueObjects = [];
    jsonRes.forEach(element => {
      let contains = false;
      for (const obj of uniqueObjects) {
        if (obj.category === element.category) {
          contains = true;
        }
      }
      if (!contains) {
        uniqueObjects.push(element);
      }
    });
    uniqueObjects.unshift({ "id": "999", "category": "all categories" });
    this.setState({ uniqueCategories: uniqueObjects, allThreads: jsonRes });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {this.state.uniqueCategories ? <AddThread listContent={this.state.uniqueCategories} /> : <p>loading..</p>}
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            {this.state.uniqueCategories ? <Categories onClick={this.handleUpdate} listContent={this.state.uniqueCategories} /> : <p>loading..</p>}
          </Col>
          <Col lg={9}>
            {this.state.allThreads ? <ThreadContainer threadList={this.state.allThreads} /> : <p>loading..</p>}
          </Col>
        </Row>
      </Container>
    )
  }
}