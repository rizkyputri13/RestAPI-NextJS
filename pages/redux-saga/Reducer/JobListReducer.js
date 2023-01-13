import * as ActionTypeJoblist from '../Constants/JobListConstant'

const INIT_STATE = {
    Jobs:[],
    Job:[]
}

const JobListReducer =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionTypeJoblist.GET_JOBLIST_REQUEST:
            return {...state}
        case ActionTypeJoblist.GET_JOBLIST_SUCCESS:
            return GetJoblistSuccessed(state,action)
        case ActionTypeJoblist.GET_JOBDETAIL_REQUEST:
            return {...state}
        case ActionTypeJoblist.GET_JOBDETAIL_SUCCESS:
            return GetJobdetailSuccessed(state,action)
        default:
            return state
    }
}



const GetJoblistSuccessed = (state,action) => {
    return {
        ...state,
        jobs: action.payload
    }
}

const GetJobdetailSuccessed = (state,action) => {
    return {
        ...state,
        job: action.payload
    }
}

export default JobListReducer