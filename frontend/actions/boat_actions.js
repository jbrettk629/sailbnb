import * as BoatsApiUtil from '../util/boats_api_util';

export const RECEIVE_ALL_BOATS = 'RECEIVE_ALL_BOATS';
export const RECEIVE_BOAT = 'RECEIVE_BOAT';
export const RECEIVE_BOAT_ERRORS = 'RECEIVE_BOAT_ERRORS';

const receiveAllBoats = boats => ({
  type: RECEIVE_ALL_BOATS,
  boats
});

const receiveBoat = payload => ({
  type: RECEIVE_BOAT,
  payload
});

const receiveErrors = errors => ({
  type: RECEIVE_BOAT_ERRORS,
  errors
});

export const fetchBoats = () => dispatch => {
  return (
    BoatsApiUtil.fetchBoats().then( boats => dispatch(receiveAllBoats(boats)))
  );
};

export const fetchBoat = (id) => dispatch => {
  return (
  BoatsApiUtil.fetchBoat(id).then(boat => dispatch(receiveBoat(boat)))
  );
};
export const createBoat = (boat) => dispatch => {

  return (
    BoatsApiUtil.createBoat(boat).then(
      boat => dispatch(receiveBoat(boat)),
      err => dispatch(receiveErrors(err))
    )
  );
};
