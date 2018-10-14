import React from 'react-redux';
import Calendar from 'react-calendar';


class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {checkin: '', checkout: '', guests: 1};

  }

  render(){

    return (
      <div className='booking-form' onSubmit={handleBook}>
        
      </div>
    );


  }

}
