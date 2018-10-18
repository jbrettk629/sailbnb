import { connect } from 'react-redux';
import ReviewForm from './review_form'
import { closeModal } from '../../actions/modal_actions';
import { updateReview } from '../../actions/reviews_actions';
import { fetchUsersBookings } from '../../actions/booking_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.reviews,
    review: ownProps.data.review,
    boatId: ownProps.data.boatId,
    user_name: Object.values(Object.values(state.entities.users))[0].name
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReview: (boatId, reviewId) => dispatch(fetchReview(boatId, reviewId)),
  updateReview: (review) => dispatch(updateReview(review)),
  closeModal: () => dispatch(closeModal()),
  fetchUsersBookings: () => dispatch(fetchUsersBookings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
