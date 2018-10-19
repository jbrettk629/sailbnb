import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { fetchBoats } from '../../actions/boat_actions';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  fetchBoats: () => dispatch(fetchBoats()),
})



class SplashPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {location: '', fireRedirect: false}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){

    e.preventDefault();
    this.setState({fireRedirect: true})
  }

  updateForm(field){

    return (
      e => this.setState({[field]: e.target.value})
    );
  }

  render() {

  return (
      <div className="splash">
        <div className="searchbar">

          <form onSubmit={this.handleSubmit}>
            <img id='search-icon' src='https://s3-us-west-1.amazonaws.com/sailbnb-dev/searchicon.png' />
            <input id="search-input"
              autoComplete="off"
              type="text"
              value={this.state.location}
              placeholder="Search"
              onChange={this.updateForm('location')}
              />
            <input id="search-button" type="submit" value='' />
          </form>

          {this.state.fireRedirect && (
             <Redirect to='/boats' />
           )}

        </div>
        <img id='splash-photo' src="https://images.pexels.com/photos/42111/pexels-photo-42111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)

// <div className="splash-bottom">
//   <h2>Recommended!</h2>
// </div>
