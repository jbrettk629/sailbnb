import React from 'react';

const BoatReviewItem = (props) => {
    return (
      <div className="boat-review-item">
        <div className="profile-pic-container">
          <img className="profile-pic" src={props.review.author_photoUrl}></img>
        </div>
        <div className="review-info">
          <div className="posting-info">
            <span className="author">{props.review.author_name}</span>
            <span className="date"> - {props.review.date}</span>
          </div>
          <div className="review-description">
            <span>{props.review.description}</span>
          </div>
        </div>
      </div>
    );
}


export default BoatReviewItem;
