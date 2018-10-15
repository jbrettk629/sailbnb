import React from 'react';


class BookingForm extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = { boat_id: '', checkin: '', checkout: '', guests: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.createBooking(this.state);
  }

  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }

  render(){

    return (
      <div className='booking-object'>
        <div className='boat-booking-info'>
          <p>Booking rate and rating</p>
        </div>
        <form className='booking-form' onSubmit={this.handleSubmit}>
          <div className='booking-fields'>
            <label>Dates</label>
            <input
              type="date"
              onChange={this.updateForm('checkin')}
              placeholder='Checkin' />
            <input
              type="date"
              onChange={this.updateForm('checkout')}
              placeholder='Checkout' />
          </div>
          <label>Guests</label>
          <input
            type="text"
            value={this.state.guests}
            onChange={this.updateForm('guests')}
            placeholder="1" />
          <br/>
          <input type="submit" value="Request To Book" />
        </form>
      </div>
    );


  }

}

export default BookingForm;
