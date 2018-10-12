import React from 'react';
import BoatMap from '../boat_map/boat_map';
import BoatIndex from '../boats/boat_index';

const Search = ({boats, fetchBoats, updateBounds}) => (
      <div>
        <BoatMap boats={boats} updateBounds={updateBounds} />
        <BoatIndex boats={boats} fetchBoats={fetchBoats} />
      </div>
);




export default Search;
