import React from 'react'


class TripsIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.fetchBoat(this.props.booking.boat_id);
    this.props.fetchReview()
  }

  handleSubmit(e){
    e.preventDefault
  }

  updateForm(field){

  }

  render(){
    return (
      <div>
        <h2>This is a booking!</h2>
      </div>


    );
  }

}

export default TripsIndexItem;
