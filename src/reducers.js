import { combineReducers } from 'redux';

import UserReducer from './modules/user/userReducer';

const appReducer = combineReducers({ user: UserReducer });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
