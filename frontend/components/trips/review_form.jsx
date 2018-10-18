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
    debugger
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
        <h2>Write a Review</h2>
        <div className="form container">
          <form onSubmit={this.handleSubmit}>
            <label>Overall Rating</label>
            <input
              type="text"
              value={this.state.overall}
              placeholder="Choose 0 through 5"
              onChange={this.updateForm('overall')} />
            <label>Review</label>
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
