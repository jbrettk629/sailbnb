import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: '', name: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  handleDemo(e){
    e.preventDefault();
    const demoUser = {email: 'guest@email', password:'password'};
    this.props.processForm(demoUser).then(this.props.closeModal);
  }

  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }

  renderErrors(){
    return (
      <ul>
          {this.props.errors.map( error => <li className='errors-li'>{error}</li>)}
      </ul>
    );
  }

  render(){

    const demoLogin = () => ( <button id="demo" type="button" onClick={this.handleDemo}>Demo Login</button> );

    const signupOption = () => (
            <div>
              <p>Don't have any account? {this.props.otherForm}</p>
            </div>
          );
    const loginOption = () => (
            <div>
              <p>Already have a Sailbnb account? {this.props.otherForm}</p>
            </div>
          );
    const changeForm = () => ( this.props.formType === 'Log in' ? signupOption() : loginOption() );

    const nameInput = () => (
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateForm('name')}
          placeholder="Name" />
      );

    return (
      <div className="session-form">
        <h1>Welcome to SailBnb</h1>
        <form id="session-form" onSubmit={this.handleSubmit}>
          <br/>
          <div onClick={this.props.closeModal} className='close-x'>X</div>
          <div className="errors-div">{ this.renderErrors() }</div>
          <br/>
          { this.props.formType === 'Sign up' ?  nameInput() : null}
          <br/>
          <br/>
            <input className="session-input-field"
              type="text"
              value={this.state.email}
              onChange={this.updateForm('email')}
              placeholder="Email"/>
            <br/>
            <br/>
            <input className="session-input-field"
              type="password"
              value={this.state.password}
              onChange={this.updateForm('password')}
              placeholder="Password"/>
            <br/>
            <br/>
            <input id="demo" type="submit" value={this.props.formType} />
            <br/>
            <br/>
            { this.props.formType === 'Log in' ? demoLogin() : null }
            <br/>
        </form>

        <div className="session-form-switch">
          {changeForm()}
        </div>
      </div>

    );
  }
}

export default withRouter(SessionForm);
