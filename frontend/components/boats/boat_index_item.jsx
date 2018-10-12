import React from 'react';

const BoatIndexItem = ({ boat }) => (
  <div>
    <ul>
      <li>{boat.title} in {boat.location}</li>
    </ul>
  </div>
);

export default BoatIndexItem;
