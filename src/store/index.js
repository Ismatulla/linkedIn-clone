import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/'
import  ThunkMiddleware  from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store
