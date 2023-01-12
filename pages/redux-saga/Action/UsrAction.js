import * as ActionType from '../Constants/UsrConstant'

export const doGetSigninRequest = (payload) => ({
    type : ActionType.GET_SIGNIN_REQUEST,
    payload
})

export const doGetSigninSuccess = (payload) =>({
    type: ActionType.GET_SIGNIN_SUCCESS,
    payload
})

export const doMessageNotification = (message) =>({
    type: ActionType.MESSAGE_NOTIFICATION,
    payload : message
})