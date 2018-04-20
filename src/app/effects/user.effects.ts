import { Injectable } from "@angular/core"
import { UserService } from "../user/user.service";
import * as userAction from "../actions/user.action";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { Effect, Actions } from "@ngrx/effects";
@Injectable()
export class userEffects {
    constructor(private userService: UserService, private actions$: Actions) {
    }

    @Effect() loadUsers$ = this.actions$
        .ofType(userAction.LOAD_USER)
        .switchMap(() => this.userService.getUsers()
            .map(user => (new userAction.LoadUserSuccessAction(user))))

    @Effect() deleteUsers$ = this.actions$
        .ofType(userAction.DELETE_USER)
        .switchMap(action => this.userService.deleteUsers(action['payload'])
            .map(user => {debugger; return (new userAction.DeleteUserSuccessAction(user['id'])) }))

}