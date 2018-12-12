import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../store/actions';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                PostsList Componente
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);