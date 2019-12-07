import React, { Component } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postAction';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: ''
        };
    
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onHandleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
        this.setState({
            title: "",
            body: ""
        })
    }

    render() {
        return (
            <Row>
                <Col sm="6">
                    <h4>Add New Post</h4>
                    <AvForm onValidSubmit={this.onSubmit}>
                        <AvField name="title" label="Title" type="text" 
                        onChange={this.onHandleChange}
                        value={this.state.title}
                        validate={{
                            required: {value: true, errorMessage: 'Please enter title'},
                            minLength: {value: 6, errorMessage: 'Your title must be between 6 and 16 characters'},
                            maxLength: {value: 16, errorMessage: 'Your title must be between 6 and 16 characters'}
                        }}  />
                        <AvField name="body" label="Body" type="text"
                        onChange={this.onHandleChange}
                        value={this.state.body} 
                        validate={{
                            required: {value: true, errorMessage: 'Please enter body'},
                            minLength: {value: 6, errorMessage: 'Your name must be between 6 and 100 characters'},
                            maxLength: {value: 100, errorMessage: 'Your name must be between 6 and 100 characters'}
                        }} />
                        <Button color="primary">Submit</Button>
                    </AvForm>
                </Col>
            </Row>
        )
    }
}
Form.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
export default connect(null, { createPost })(Form);