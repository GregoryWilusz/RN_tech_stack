export const selectLibrary = (libraryId) => {
    // func returns an plain JS object with property typy of 'select_library'.
    // An object with a type property is an ACTION. Action is how we cause reducers to update the data that they produce.
    // The action is wrapped by function which we refer to as an action creator. Whenever we call this action creator (we must provide the libraryId arg)
    // it return to action will be automatically dispatched to us
    // and sent off to the different reducers.
    return {
        type: 'select_library',
        payload: libraryId
    };
};