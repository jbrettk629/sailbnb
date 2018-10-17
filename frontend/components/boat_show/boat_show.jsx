import React from 'react';
import BookingFormContainer from './booking_form_container';
import BoatDetail from './boat_detail'
import BoatReviewsContainer from './boat_reviews_container'


class BoatShow extends React.Component {

  componentDidMount(){
    this.props.fetchBoat(this.props.boatId);
  }

  componentWillReceiveProps(){
    this.props.fetchBookings(this.props.boatId);
  }


  render(){
    if (this.props.boat === undefined) return '';
    return (

      <div className="boat-show-page">
        <div className="boat-show-images">
          <div className="boat-show-pic-left" >
            <img src={this.props.boat.photoUrls[0]}/>
          </div>
          <div className="boat-show-pics-right">
            <div className="boat-show-pics-right-top">
              <div className="boat-show-pics">
                <img src={this.props.boat.photoUrls[1]}/>
              </div>
              <div className="boat-show-pics">
                <img src={this.props.boat.photoUrls[2]}/>
              </div>
            </div>
            <div className="boat-show-pics-right-bottom">
              <div className="boat-show-pics">
                <img src={this.props.boat.photoUrls[3]}/>
              </div>
              <div className="boat-show-pics">
                <img src={this.props.boat.photoUrls[4]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="boat-show-bottom">
          <div className="boat-show-info">
            <BoatDetail boat={this.props.boat} />
            <BoatReviewsContainer reviews={this.props.reviews} boatId={this.props.boatId}/>
          </div>

          <BookingFormContainer boat={this.props.boat}/>

        </div>
      </div>
    );
  }
}

export default BoatShow;
