import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BoatIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const  { boat } = this.props;

    return (
      <Link className="boat-show-link" to={`/boats/${boat.id}`}>
        <div className="boat-index-item" >
          <div className="boat-index-picture">
            <img></img>
          </div>
          <div className="boat-index-info">
            <div className="boat-index-middle-info">
              <h2>{boat.title}</h2>
              <h3>{boat.location}</h3>
              <span className="specifics">{boat.guests} guests {boat.bedrooms} bedrooms {boat.beds} beds {boat.baths} baths</span>
            </div>
            <div className="boat-index-right-info">
              <div className ="boat-index-price">
                <div className="rate">${boat.rate}</div>
                <div className="per-night">per night</div>
              </div>
              <div className="boat-rating">
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default BoatIndexItem;
