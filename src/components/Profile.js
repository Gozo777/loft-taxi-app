import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/actions';

/*
import { getCard, getIsLoading, getError } from '../reducers/auth';
import {
  fetchCardRequest,
} from './modules/card/actions';
import { connect } from 'react-redux'; */

export class Profile extends Component {

  /*
  componentDidMount() {
    const { fetchCardRequest } = this.props;
    fetchCardRequest();
  } */
  
  render() {

    //const { card, isLoading, error } = this.props;
    
    //if (isLoading) return <p>Loading...</p>;
    //if (error) return <p>Error happened</p>;
    
    return (
      <>
        <p>profile</p>
      </>
    );
  }
}

/*
const mapStateToProps = state => ({
  card: getCard(state),
  isLoading: getIsLoading(state),
  error: getError(state)
})
const mapDispatchToProps = { fetchCardRequest }; */

export default connect(
  null, 
  { logOut })(Profile)
  
  /*
  mapStateToProps,
  mapDispatchToProps
)(withAuth(Profile)); */