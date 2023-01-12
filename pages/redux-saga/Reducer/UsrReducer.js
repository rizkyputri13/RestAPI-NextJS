import * as ActionType from '../Constants/UsrConstant'
import { getCookie } from 'cookies-next'

const getFromLocalStorage = (key) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return getCookie(key)
}

const INIT_STATE = {
    UserProfile: getFromLocalStorage('profile') ? JSON.parse(getCookie('profile')) : null,
    UserSignup: null,
    message: ''
}

const UsrReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_SIGNIN_REQUEST:
            return state
        case ActionType.GET_SIGNIN_SUCCESS:
            return GetSigninSuccess(state, action)
        case ActionType.MESSAGE_NOTIFICATION:
            return ShowMessage(state, action)
        default:
            return state
    }
}

const GetSigninSuccess = (state, action) => {
    return {
        ...state,
        UserProfile: action.payload,
        message: ''
    }
}

const ShowMessage = (state, action) => {
    const { payload } = action
    return {
        ...state,
        message: payload.message
    }
}

export default UsrReducer