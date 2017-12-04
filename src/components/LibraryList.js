import React, {Component} from 'react';
import { connect } from 'react-redux'; // Connect helper is a function to get the data from a store.

class LibraryList extends Component {
    render() {
        console.log(this.props); // props object should have a libraries prop to it with the value of state.libraries (list of libraries). In console we now can see an object with the property of
                                // dispatch which is a function. And property of libraries that contains all objects.
        return;
    }
}

// The purpose of this func is to take a global state object (our app's state), map (take) props from object and provide them as props to our component of LibraryList.
// Good to start with putting console.log(state) inside of the body.
// our function as a 1st arg of connect function.
const mapStateToProps = state => {
    return { libraries: state.libraries }; // We return an object with the key of libraries and the value of state.libraries (reference to array of libraries)
                                            // Now the component LibraryList has a prop of libraries and value of the array of libraries.
};

export default connect(mapStateToProps)(LibraryList); // it calls the function connect and then it returns another function, then we immediately call that connect return function with the LibraryList.