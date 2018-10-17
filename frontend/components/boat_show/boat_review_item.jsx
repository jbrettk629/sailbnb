import React from 'react';
import { fetchReview } from '../../actions/reviews_actions';

class BoatReviewItem extends React.Component {
  constructor(props){
    super(props)
  }


  componentDidMount(){
    this.props.fetchReview(this.props.boatId, this.props.review.id)
  }

  render(){
    debugger
    return (
      <div className="boat-review-item">
        <h1>{this.props.review.id}</h1>
        <h2>{this.props.review.overall}</h2>
        <h3>{this.props.review.description}</h3>
      </div>
    );
  }
}

export default BoatReviewItem;
