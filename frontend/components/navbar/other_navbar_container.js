import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import OtherNavBar from './navbar_other';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherNavBar);
