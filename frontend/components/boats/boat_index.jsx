import React from 'react';
import BoatIndexItem from './boat_index_item';

class BoatIndex extends React.Component {

  componentDidMount(){
    this.props.fetchBoats();
  }

  render() {

    const boats = this.props.boats.map( boat => {
      return (
          <BoatIndexItem key={boat.id} boat={boat} />
      );
    });

    return (
      <div className="boat-index">
        { boats }
      </div>



    );
  }
}

export default BoatIndex;
