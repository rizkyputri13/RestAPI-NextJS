import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
function* watchAll(){
    yield all([
        
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
    ])
}

export default watchAll