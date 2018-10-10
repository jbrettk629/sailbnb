import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }

  render(){

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <header>Please {this.formType} or </header>
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={updateForm('email')} />
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={updateForm('password')} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>

    );
  }
}
