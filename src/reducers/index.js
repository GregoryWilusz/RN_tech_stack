import {combineReducers} from 'redux';

export default combineReducers({        // we pass it an object with a single KEY of libraries and that's gonna return an empty array now. 'Libraries' it's our first reducer which by default always
                                        // returns an empty array.
    libraries: () => []
});