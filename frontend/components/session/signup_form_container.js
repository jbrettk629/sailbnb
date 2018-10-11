import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to="/login">Login</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: <button onclick={() => dispatch(openModal('login'))}>Signup</button>,
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
