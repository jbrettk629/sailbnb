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
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }

  renderErrors(){
    return (
      <ul>
          {this.props.errors.map( error => <li>{error}</li>)}
      </ul>
    );
  }

  render(){

    const signupOption = (
            <div>
              Don't have any account? {this.props.otherForm}
            </div>
          );
    const loginOption = (
            <div>
              Already have a Sailbnb account? {this.props.otherForm}
            </div>
          );

    return (
      <div className="session-form">
        <h1>Skip the hotel hussle, book a stay on a private boat!</h1>
        <form id="session-form" onSubmit={this.handleSubmit}>
          <br/>
          <div onClick={this.props.closeModal} className='close-x'>X</div>
          <br/>
            <input
              type="text"
              value={this.state.email}
              onChange={this.updateForm('email')}
              placeholder="Email"/>
            <br/>
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.updateForm('password')}
              placeholder="Password"/>
            <br/>
          <input type="submit" value={this.props.formType} />
        </form>

        <div classname="session-form-switch">
          { this.props.formType === 'input' ? signupOption : loginOption }
        </div>
      </div>

    );
  }
}

export default withRouter(SessionForm);
