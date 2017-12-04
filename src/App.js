import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common/';
import LibraryList from './components/LibraryList';

// Provider serves as glue between redux side of our app and the Redux side. It can only have one child! We created a store and one reducer and passed it to the store when created it.
// In Redux, data are tied up with REDUCERS - they produce an app state which holds our data.

const App = () => {
    return (

            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText="Tech Stack"/>
                    <LibraryList />
                </View>
            </Provider>

    );
};

export default App;