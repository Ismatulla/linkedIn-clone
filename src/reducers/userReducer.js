import { SET_USER, SIGN_UP_EMAIL } from "../actions/actionType"
const INITIAL_STATE = {
    user: null,
    email: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SIGN_UP_EMAIL:
            return {
                ...state,
                email: action.email
            }
        default:
            return state
    }
}
export default userReducer