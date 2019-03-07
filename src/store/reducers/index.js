import { combineReducers } from "redux";
import authReducer from "./auth.reducers";

// Root Reducer
const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
