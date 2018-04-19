export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";

export class LoadUserAction {
    readonly type = LOAD_USER;
    constructor() {

    }
}

export class LoadUserSuccessAction {
    readonly type = LOAD_USER_SUCCESS;
    constructor(public payload: any[]) {

    }
}

export type Action = LoadUserAction | LoadUserSuccessAction