import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import JobListReducer from "./JobListReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    joblistStated: JobListReducer,
})

export default rootReducer