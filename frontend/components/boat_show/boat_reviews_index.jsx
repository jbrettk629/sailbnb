import React from 'react'
import BoatReviewItem from './boat_review_item';
import { Link } from 'react-router-dom';

const BoatReviewsIndex = (props) => {

  const addReview = () => {
    if (props.currentUser) {
      return (
        <div className="booking-index-link-to-trips">
          <Link  to='/bookings'>Add/Edit a Review</Link>
        </div>
      );
    }
  }

  const reviews = Object.values(props.reviews).map( review => {
    debugger
    if (review.author_name === null){
      return null;
    } else {
    return <BoatReviewItem key={review.id} review={review} />;
    }
  })

  return (
    <div>
      {addReview()}
      <ul>
        {reviews}
      </ul>
    </div>
  );
}

export default BoatReviewsIndex;
