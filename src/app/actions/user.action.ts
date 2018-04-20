export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export class LoadUserAction {
    readonly type = LOAD_USER;
    constructor() {

    }
}

export class LoadUserSuccessAction {
    readonly type = LOAD_USER_SUCCESS;
    constructor(public payload: any) {

    }
}

export class DeleteUserAction {
    readonly type = DELETE_USER;
    constructor(public payload: any) {

    }
}

export class DeleteUserSuccessAction {
    readonly type = DELETE_USER_SUCCESS;
    constructor(public payload: any) {

    }
}

export type Action
    = LoadUserAction
    | LoadUserSuccessAction
    | DeleteUserAction
    | DeleteUserSuccessAction