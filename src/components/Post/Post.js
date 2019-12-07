import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

class Post extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postsData = this.props.posts.map((post,index) =>
            <Row key={index}>
            <Col sm="12">
              <Card body>
                <CardTitle><h4>{post.title}</h4></CardTitle>
                <CardText>{post.body}</CardText>
                <Button>Read More</Button>
              </Card>
            </Col>
          </Row>
        );
        return (
            <div>
                <h3>Posts</h3>
                <hr></hr>
                {postsData}
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
  
  const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
  });
  
export default connect(mapStateToProps, { fetchPosts })(Post);
