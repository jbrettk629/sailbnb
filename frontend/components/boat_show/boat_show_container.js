import { connect } from 'react-redux';
import { fetchBoat } from '../../actions/boat_actions';
import { fetchBookings } from '../../actions/booking_actions';
import BoatShow from './boat_show';

const mapStateToProps = ( state, ownProps) => {
  const boatId = parseInt(ownProps.match.params.boatId);
return ({
  boatId: boatId,
  boat: state.entities.boats[boatId],
});
};

const mapDispatchToProps = dispatch => ({
  fetchBoat: (boatId) => dispatch(fetchBoat(boatId)),
  fetchBookings: (boat_id) => dispatch(fetchBookings(boat_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoatShow);
