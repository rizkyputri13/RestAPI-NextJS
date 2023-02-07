import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import * as ActionTypeJoblist from '../Constants/JobListConstant'
import { handleUsrSignin,handleUsrSignout, } from "./UsrMidle";
import { handleGetJoblist, handleGetJobdetail, handleSearchJob } from "./JobListMiddle";
function* watchAll(){
    yield all([
        
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeJoblist.GET_JOBLIST_REQUEST,handleGetJoblist),
        takeEvery(ActionTypeJoblist.GET_JOBDETAIL_REQUEST,handleGetJobdetail),
        takeEvery(ActionTypeJoblist.SEARCH_JOB_REQUEST,handleSearchJob),
    ])
}

export default watchAll