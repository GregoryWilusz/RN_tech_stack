// Reducers ale ALWAYS called with the state object which is the state that was returned the last time this reducer was executed.
// 2nd arg - action - whenever I dispatch an action it will show up as the second argument.

// state = null (initial value) - if this arg is undefined we should instead default it to the value of NULL. FOr us it means I haven't selected any library yet.
export default (state = null, action) => {
    // console.log(action);
    // return null; // because we have to return something, and we don't want to have a preselected row. Reducer always has to return some initial state!

    // By convention reducers consist of switch statement
    switch (action.type) {
        case 'select_library':
            return action.payload; // whenever the action.type is 'select_library' we want to return that library's ID
        default:
            return state; // it will return whatever it returned the last time that it ran (state is an reducer's function arg)
    }
};