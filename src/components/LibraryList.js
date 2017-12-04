import React, {Component} from 'react';
import {ListView} from 'react-native';
import { connect } from 'react-redux'; // Connect helper is a function to get the data from a store.
import ListItem from './ListItem';

class LibraryList extends Component {

    //initializing a data source for ListView
    componentWillMount() {
        // WHen we create a ListView we have to tell it exactly what sorts of data to use
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });

        //ds - data source object (ours) which is "telling" - take the list of libraries and be going to use this list to render a list of data
        this.dataSource = ds.cloneWithRows(this.props.libraries);

    }
    // Telling a ListView: if you want to render just a single row, please execute the renderRow() function
    // Argument 'library' is to pass the information pass down into this ListItem (element in the list that is trying to render). It says: ListItem you are supposed to show particular library right
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        // console.log(this.props); // props object should have a libraries prop to it with the value of state.libraries (list of libraries). In console we now can see an object with the property of
                                // dispatch which is a function. And property of libraries that contains all objects.
        // We also have to tell the ListView how to render a very specific row
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
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