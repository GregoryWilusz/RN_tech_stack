import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>  {/* We created a store and one reducer and passed it to the store when created it */}
            <View/>
        </Provider>
    );
};

export default App;