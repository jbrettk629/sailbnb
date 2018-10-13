import React from 'react';
import BoatMap from '../boat_map/boat_map';
import BoatIndex from '../boats/boat_index';
//
// const Search = ({boats, fetchBoats, updateBounds}) => (
const Search = ({boats, fetchBoats}) => (
      <div className="boat-index-2">
        <BoatIndex boats={boats} fetchBoats={fetchBoats} />
        <BoatMap boats={boats} />
      </div>
);
//
//
//
//
export default Search;
