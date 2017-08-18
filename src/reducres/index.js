import {combineReducers} from 'redux';
import LapReducer from './reducer_lap';

const rootReducer = combineReducers({
    laps : LapReduxer
})

export default rootReducer;