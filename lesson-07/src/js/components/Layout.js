import React from "react";
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import {fetchTweets} from '../actions/tweetsActions';

class Layout extends React.Component {

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  componentDidMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    const {user, tweets} = this.props;
    if(!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Загрузить твиты</button>
    }
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
    return <div>
      <h1>{user.name} | {user.age}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets
  };
}

export default connect(mapStateToProps)(Layout);