import { connect } from 'react-redux';
import { fetchBoats } from '../../actions/boat_actions';
import Search from '../search/search';

const mapStateToProps = state => ({
  boats: Object.values(state.entities.boats)
});

const mapDispatchToProps = dispatch => ({
  fetchBoats: () => dispatch(fetchBoats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
