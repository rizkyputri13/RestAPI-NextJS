import {call,put} from 'redux-saga/effects'
import UserApi from '../../api/UserApi'
import { doGetSigninSuccess, doMessageNotification } from '../Action/UsrAction'
import { setCookie, deleteCookie } from 'cookies-next';
function* handleUsrSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(UserApi.signin,payload);
        if (Object.keys(result.data).length === 0){
            yield put(doMessageNotification({message : 'user or password not match, try again'}));
        }
        else{
            setCookie('access_token',result.data.access_token)
            const profile = yield call (UserApi.profile)
            setCookie('profile',JSON.stringify(profile.data))
            yield put(doGetSigninSuccess(profile.data))
        }     
    } catch (error) {
        yield put(doMessageNotification({message : 'user or password not match, try again'}));
    }
}

export  {
    handleUsrSignin,
}