import * as ActionTypeJoblist from '../Constants/JobListConstant'

export const GetJoblistRequest = () => ({
    type: ActionTypeJoblist.GET_JOBLIST_REQUEST

})

export const GetJoblistSuccess = (payload) =>({
    type: ActionTypeJoblist.GET_JOBLIST_SUCCESS,
    payload
})

export const GetJoblistFailed = (payload) => ({
    type:ActionTypeJoblist.GET_JOBLIST_FAILED,
    payload
})

export const GetJobdetailRequest = () => ({
    type: ActionTypeJoblist.GET_JOBDETAIL_REQUEST

})

export const GetJobdetailSuccess = (payload) =>({
    type: ActionTypeJoblist.GET_JOBDETAIL_SUCCESS,
    payload
})

export const GetJobdetailFailed = (payload) => ({
    type:ActionTypeJoblist.GET_JOBDETAIL_FAILED,
    payload
})