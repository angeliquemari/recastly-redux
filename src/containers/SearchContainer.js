import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
let mapDispatchToProps = {
  handleSearchInputChange: handleVideoSearch
};
var SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
