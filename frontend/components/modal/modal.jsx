import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignUpFormContainer from '../session/signup_form_container';
import ReviewFormContainer from '../trips/review_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal.modal) {
  case 'login':
    component = <LoginFormContainer />;
    break;
  case 'signup':
    component = <SignUpFormContainer />;
    break;
  case 'review':
    component = <ReviewFormContainer data={modal.data}/>;
    break;
  default:
    return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return({
    modal: state.ui.modal,
  });
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
