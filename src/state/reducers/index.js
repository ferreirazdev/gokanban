import { combineReducers } from 'redux';

import columnsReducer from './columns';

export default combineReducers({
  columns: columnsReducer,
})