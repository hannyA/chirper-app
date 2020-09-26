import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import Dashboard from './Dashboard'
import Loadingbar from 'react-redux-loading'
import NewTweet from './NewTweet'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <div>
        <Loadingbar />
        {this.props.loading === true 
          ? null 
          : <NewTweet />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
   loading: authedUser === null  
  }
}

export default connect(mapStateToProps)(App)