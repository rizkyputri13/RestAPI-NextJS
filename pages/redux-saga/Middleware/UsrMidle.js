import {call,put} from 'redux-saga/effects'
import UserApi from '../../api/UserApi'
import { doGetSigninSuccess, doMessageNotification, doPushSignoutFailed, doPushSignoutSuccess } from '../Action/UsrAction'
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

function* handleUsrSignout(action) {
    const {payload} = action;
    try {
        deleteCookie('access_token');
        deleteCookie('profile');
        yield put(doPushSignoutSuccess(payload));
    } catch (error) {
        yield put(doPushSignoutFailed(error));
    }
}


export  {
    handleUsrSignin,
    handleUsrSignout,
    
}