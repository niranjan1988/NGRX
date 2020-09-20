import { Action } from '@ngrx/store';

export const ADD_RECORD = "ADD_RECORD";

export class AddRecord implements Action {

    readonly type = ADD_RECORD;

    constructor( public payload : string) {}

}

export type recordTypes = AddRecord;