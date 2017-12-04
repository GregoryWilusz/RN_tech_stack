import data from './LibraryList.json'; // now data should be ann array with objects.
// Whenever this reducer runs it will return an array / LIST of libraries (objects). It hasn't any other action, just return data. No matter how many action we dispatch
// because it returns a static list, and actions update the data that is inside of the reducers.
export default () => data;
