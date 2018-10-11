import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">Sign Up</Link>,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: <button onclick={() => dispatch(openModal('signup'))}>Signup</button>,
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
