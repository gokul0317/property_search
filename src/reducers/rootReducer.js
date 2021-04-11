import { combineReducers } from 'redux';

import propertyReducer from './PropertyReducer/property.reducer';

const rootReducer = combineReducers({
	propertyReducer,
});

export default rootReducer;
