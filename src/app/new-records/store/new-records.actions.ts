import { Action } from '@ngrx/store';

export const ADD_NEW_RECORD = "ADD_NEW_RECORD";

export class AddNewRecord implements Action {

    readonly type = ADD_NEW_RECORD;

    constructor( public payload : string) {}

}

export type recordTypes = AddNewRecord;