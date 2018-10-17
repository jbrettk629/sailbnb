import React from 'react'
import BoatReviewItem from './boat_review_item';

const BoatReviewsIndex = (props) => {

  const reviews = Object.values(props.reviews).map( review => {
    return (
      <BoatReviewItem
        review={review}
        boatId={props.boatId}
        fetchReview={props.fetchReview} />
    );
  })

  return (
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
  );
}

export default BoatReviewsIndex;