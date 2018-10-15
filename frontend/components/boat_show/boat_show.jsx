import React from 'react';
import BookingFormContainer from './booking_form_container';


class BoatShow extends React.Component {

  componentDidMount(){
    debugger
    this.props.fetchBoat(this.props.boatId);
    this.props.fetchBookings(this.props.boatId);
  }



  render(){
    if (this.props.boat === undefined) return '';
    return (

      <div className="boat-show-page">
        <div className="boat-show-images">
          <div className="boat-show-pic-left" >
            <p>Main Picture</p>
          </div>
          <div className="boat-show-pics-right">
            <div className="boat-show-pics-right-top">
              <div className="boat-show-pics">
                <p>Smaller Pictures</p>
              </div>
              <div className="boat-show-pics">
                <p>Smaller Pictures</p>
              </div>
            </div>
            <div className="boat-show-pics-right-bottom">
              <div className="boat-show-pics">
                <p>Smaller Pictures</p>
              </div>
              <div className="boat-show-pics">
                <p>Smaller Pictures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="boat-show-bottom">
          <div className="boat-show-info">
            <p>{this.props.boat.title}</p>
            <p>{this.props.boat.description}</p>
            <p>Boat Show Reviews</p>
          </div>
          <div className="boat-booking">
            <BookingFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default BoatShow;
