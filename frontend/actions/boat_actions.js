import * as BoatsApiUtil from '../util/boats_api_util';

export const RECEIVE_ALL_BOATS = 'RECEIVE_ALL_BOATS';
export const RECEIVE_BOAT = 'RECEIVE_BOAT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllBoats = boats => ({
  type: RECEIVE_ALL_BOATS,
  boats
});

const receiveBoat = boat => ({
  type: RECEIVE_BOAT,
  boat
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchBoats = (bounds) => dispatch => {

  return (
    BoatsApiUtil.fetchBoats(bounds).then( boats => dispatch(receiveAllBoats(boats)))
  );
};

export const fetchBoat = (id) => dispatch => (
  BoatsApiUtil.fetchBoat(id).then(boat => dispatch(receiveBoat(boat)))
);

export const createBoat = (boat) => dispatch => {

  return (
    BoatsApiUtil.createBoat(boat).then(
      boat => dispatch(receiveBoat(boat)),
      err => dispatch(receiveErrors(err))
    )
  );
};
