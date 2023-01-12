import * as ActionType from '../Constants/UsrConstant'

export const doGetSigninRequest = (payload) => ({
    type : ActionType.GET_SIGNIN_REQUEST,
    payload
})

export const doGetSigninSuccess = (payload) =>({
    type: ActionType.GET_SIGNIN_SUCCESS,
    payload
})

export const doPushSignoutRequest = (payload) => ({
    type: ActionType.POST_SIGNOUT_REQUEST,
    payload
})

export const doPushSignoutSuccess = (payload) => ({
    type: ActionType.POST_SIGNOUT_SUCCESS,
    payload
})

export const doPushSignoutFailed = (payload) => ({
    type: ActionType.POST_SIGNOUT_FAILED,
    payload
})

export const doMessageNotification = (message) =>({
    type: ActionType.MESSAGE_NOTIFICATION,
    payload : message
})