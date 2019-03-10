import React from 'react';
import PostStore from '../stores/postStore';
import {getPosts, addPost} from '../actions/postActions';
import PostList2 from '../components/PostList2';

export default class Posts2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

    newPost(){
        const body = 'Текст добавленного поста';
        const userId = 1;
        const title = 'Мой пост';

        addPost(title, userId, body);
    }

    onPostChange()
    {
        this.setState({posts: PostStore.posts});
    }

    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }

    render() {
        return(
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Add new post</button>
                <PostList2 posts={this.state.posts}/>
            </div>

        );
    }
}