import { connect } from 'react-redux';
import BoatReviewsIndex from './boat_reviews_index'

const mapStateToProps = state => {
  return ({
    state: state,
  });
}

const mapDispatchToProps = dispatch => ({
  fetchReview: (boatId, reviewId) => dispatch(fetchReview(boatId, reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoatReviewsIndex)
