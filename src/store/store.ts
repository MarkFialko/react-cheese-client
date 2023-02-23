import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    userInfo: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch & ThunkDispatch<any, undefined, AnyAction>

export default store