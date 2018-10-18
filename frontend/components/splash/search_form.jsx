import React from 'react';


class SearchFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = {location: '', checkin: '', checkout: '', guests: 1};
  }


}

// export default SearchForm;
//
//
// import React from "react";
// import { withRouter } from "react-router-dom";
//
// class SearchBar extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      search: ""
//    };
//    this.updateSearch = this.updateSearch.bind(this);
//    this.showSearchResults = this.showSearchResults.bind(this);
//    this.handleClick = this.handleClick.bind(this);
//  }
//
//  componentDidMount() {
//    document.addEventListener("mousedown", this.handleClick, false);
//  }
//
//  showSearchResults() {
//    const searchResults = document.getElementsByClassName("search-results")[0];
//    searchResults.classList.toggle("hidden-menu");
//  }
//  updateSearch(e) {
//    this.setState({ search: e.target.value.substr(0).toLowerCase() });
//  }
//
//  handleClick(e) {
//    const button = document.getElementsByClassName("search-input")[0];
//    if (document.getElementsByClassName("search-bar")[0].contains(e.target)) {
//      return;
//    }
//    this.handleClickOutside();
//  }
//
//  handleClickOutside() {
//    const searchResults = document.getElementsByClassName("search-results")[0];
//    if (searchResults.classList.contains("hidden-menu")) {
//    } else {
//      searchResults.classList.toggle("hidden-menu");
//    }
//  }
//
//  render() {
//    let filteredBoats = this.props.boats.filter(boat => {
//      if (
//        athlete.name.toLowerCase().indexOf(this.state.search) !== -1 ||
//        athlete.team_acronym.toLowerCase().indexOf(this.state.search) !== -1
//      ) {
//        return boat;
//      }
//    });
//
//    return (
//      <div className="search-bar-container">
//        <form className="search-bar">
//          <input
//            className="search-input"
//            type="text"
//            placeholder="Search"
//            value={this.state.search}
//            onChange={this.updateSearch}
//            onClick={this.showSearchResults}
//          />
//          <ul className="search-results hidden-menu">
//            <h4 className="search-result-label">Athletes</h4>
//
//            {filteredAthletes.slice(0, :sunglasses:.map(athlete => {
//              return (
//                <li
//                  onClick={() =>
//                    this.props.history.push(`/athletes/${athlete.id}`)
//                  }
//                  className="search-result-item"
//                  key={athlete.id}
//                >
//                  <h4 className="search-athlete-team">
//                    {athlete.team_acronym.toUpperCase()}
//                  </h4>
//                  <h4 className="search-athlete-name">{athlete.name}</h4>
//                </li>
//              );
//            })}
//          </ul>
//        </form>
//      </div>
//    );
//  }
// }
//
// export default withRouter(SearchBar);
