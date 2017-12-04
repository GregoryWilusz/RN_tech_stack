import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// we pass it an object with a single KEY of libraries.
// Libraries - is our first reducer which holds by default an empty array. will hold a list of objects containing libraries' info and ID, etc.
// 1 reducer -> 1 file! that's convention. But doing we are doing a thing where multiple reducer will work together.
// We assign LibraryReducer to the key of libraries and now, whenever we called the store object (ex. console.log(store.getState()), we expect // { libraries: [] }).
// After importing data from .json file we are expecting to have sth in this fashion: console.log(store.getState()), we expect // { libraries: [ { id: 1, title: 'webpack', description: '...'] }

// Steps: 1) when app boots up, it evaluates this statement here (in the body) and executes the library reducer on time to get initial state put together.
// 2) mapStateToProps function is executed with the first arg of func (state)

//Code below is executed after the app boots up
export default combineReducers({
    libraries: LibraryReducer, // value of this piece of state (libraries) is generated from LibraryReducer
    selectedLibraryId: SelectionReducer // value of this piece of state (selectedLibraryId) is generated from SelectionReducer
});