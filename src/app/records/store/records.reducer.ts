import * as recordActions from "./records.actions";

const initialState = "InitialData";

export function addRecordReducer(state = initialState, action: recordActions.recordTypes) {
switch (action.type) {
    case recordActions.ADD_RECORD:
        return state;

    default:
        return state;
}
}