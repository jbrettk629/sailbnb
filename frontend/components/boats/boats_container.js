import { connect } from 'react-redux';
import { fetchBoats } from '../../actions/boat_actions';
import BoatIndex from './boat_index';

const mapStateToProps = state => ({
  boats: Object.values(state.entities.boats)
});

const mapDispatchToProps = dispatch => ({
  fetchBoats: () => dispatch(fetchBoats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoatIndex);
