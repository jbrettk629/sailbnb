import { connect } from 'react-redux';
import BoatReviewsIndex from './boat_reviews_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchReview: (boatId, reviewId) => dispatch(fetchReview(boatId, reviewId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoatReviewsIndex));
