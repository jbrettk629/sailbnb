import React from 'react';
import BoatIndexItem from './boat_index_item';

class BoatIndex extends React.Component {

  componentDidMount(){
    this.props.fetchBoats();
  }

  render() {

    const boats = this.props.boats.map( boat => {
      return (
        <ul>
          <BoatIndexItem key={boat.id} boat={boat} />
        </ul>
      );
    });

    return (
      <div>
        <ul>
          { boats }
        </ul>
      </div>



    );
  }
}

export default BoatIndex;
