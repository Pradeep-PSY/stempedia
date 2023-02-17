import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
import { AppReducer } from '../reducer/RootReducer';
  
  const rootReducer = combineReducers({ app : AppReducer});
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );