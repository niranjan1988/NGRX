import * as recordActions from "./new-records.actions";

const initialState = "InitialData";

export function addNewRecordReducer(state = initialState, action: recordActions.recordTypes) {
switch (action.type) {
    case recordActions.ADD_NEW_RECORD:
        return action.payload;

    default:
        return state;
}
}