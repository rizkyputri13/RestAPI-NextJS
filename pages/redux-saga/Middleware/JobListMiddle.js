import { call, put } from 'redux-saga/effects'
import JobListApi from '../../api/JobListApi'
import {
    GetJoblistSuccess, GetJoblistFailed, GetJobdetailSuccess, GetJobdetailFailed
} from '../Action/JobListAction'

function* handleGetJoblist() {
    try {
        const result = yield call(JobListApi.getJobs)
        yield put(GetJoblistSuccess(result))
    } catch (error) {
        yield put(GetJoblistFailed(error))
    }
}

function* handleGetJobdetail() {
    
    try {
        const result = yield call(JobListApi.getJob)
        yield put(GetJobdetailSuccess(result))
    } catch (error) {
        yield put(GetJobdetailFailed(error))
    }
}

export {
    handleGetJoblist,
    handleGetJobdetail
}