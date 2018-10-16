import React from 'react';
import { withRouter } from 'react-router-dom';


class BookingForm extends React.Component {
  constructor(props){
    super(props);
    const boat_id = this.props.match.params.boatId;
    this.state = { boat_id: boat_id, checkin: '', checkout: '', guests: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createBooking(this.state);
  }

  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }

  renderErrors(){
    return (
       <ul>
          {this.props.errors.map( error => <li className='errors-li'>{error}</li>)}
      </ul>
    );
  }


  renderConfirmation(){
    return <li>Congrats, you're booked!</li>
  }

  renderResults(){
    if (this.props.errors.length === 0) {
      return this.renderConfirmation();
    } else {
      return this.renderErrors();
    };
  }

  render(){
    return (
      <div className='booking-object'>
        <div className='boat-booking-info'>
          <span id="booking-rate">${this.props.boat.rate}</span>
          <span id="booking-per"> per night</span>
        </div>
        {this.renderErrors()}
        <form className='booking-form' onSubmit={this.handleSubmit}>
            <label>Dates</label>
            <br/>
            <div className="checkin">
              <label>Checkin:</label>
              <input
                type="date"
                onChange={this.updateForm('checkin')}
                placeholder='Checkin' />
            </div>
            <div className="checkout">
              <label>Checkout:</label>
              <input
                type="date"
                onChange={this.updateForm('checkout')}
                placeholder='Checkout' />
            </div>
          <label>Guests</label>
            <br/>
          <input
            id="guests"
            type="text"
            value={this.state.guests}
            onChange={this.updateForm('guests')}
            placeholder="1" />
          <br/>
          <div className="submit-container">
            <input id="submit" type="submit" value="Request To Book" />
          </div>
        </form>
      </div>
    );


  }

}

export default withRouter(BookingForm);
