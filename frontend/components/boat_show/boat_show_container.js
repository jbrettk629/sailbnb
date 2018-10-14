import { connect } from 'react-redux';
import { fetchBoat } from '../../actions/boat_actions';
import BoatShow from './boat_show';

const mapStateToProps = ( state, ownProps) => {
  debugger;
  const boatId = parseInt(ownProps.match.params.boatId);
return ({
  boatId: boatId,
  boat: state.entities.boats[boatId],
});
};

const mapDispatchToProps = dispatch => ({
  fetchBoat: (boatId) => dispach(fetchBoat(boatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoatShow);
