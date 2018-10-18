import { connect } from 'react-redux';
import ReviewForm from './review_form'
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/reviews_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.reviews,
    booking_des: ownProps.booking.booking_des,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (review) => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
