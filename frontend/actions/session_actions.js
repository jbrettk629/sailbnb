import * as SessionApIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = current_user => ({
  type: RECEIVE_CURRENT_USER,
  current_user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_CURRENT_USER,
  errors
});

export const login = user => dispatch => (
  SessionApIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err))
  )
);

export const logout = () => dispatch => (
  SessionApIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    err => dispatch(receiveErrors(err))
  )
);

export const signup = user => dispatch => (
  SessionApIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err))
  )
);
