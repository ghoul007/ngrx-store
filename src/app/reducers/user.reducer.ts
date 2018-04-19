import * as userActions from '../actions/user.action'
export function userReducer(state = [], action: userActions.Action) {
    switch (action.type) {
        case userActions.LOAD_USER_SUCCESS: {
            return action.payload
        }
        default: {
            return state
        }
    }
}