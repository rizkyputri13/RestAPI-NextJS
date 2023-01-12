import { call, put } from 'redux-saga/effects'
import JobListApi from '../../api/JobListApi'
import {
    GetJoblistSuccess, GetJoblistFailed
} from '../Action/JobListAction'

function* handleGetJoblist() {
    try {
        const result = yield call(JobListApi.getJobs)
        yield put(GetJoblistSuccess(result))
    } catch (error) {
        yield put(GetJoblistFailed(error))
    }
}

export {
    handleGetJoblist
}