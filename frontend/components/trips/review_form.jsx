import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    const review = this.props.review

    this.state = {
      id: review.id,
      booking_id: review.booking_id,
      overall: review.overall,
      description: review.description,
      author_name: this.props.user_name
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateReview(this.state, this.state.booking_id)
    this.props.fetchUsersBookings();
    this.props.closeModal();
  }


  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }


  render(){
    return(
      <div className="review-form">
        <div className="review-heading">Write a Review</div>
        <div className="form container">
          <form className="form-review" onSubmit={this.handleSubmit}>
            <label className="review-label" >Overall Rating</label>
            <input
              type="text"
              value={this.state.overall}
              placeholder="Choose 0 through 5"
              onChange={this.updateForm('overall')} />
            <label className="review-label">Review</label>
            <textarea
              rows="5"
              cols="30"
              value={this.state.description}
              onChange={this.updateForm('description')}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(ReviewForm);
