import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeEnhancers, middleware } from './middleware';
import categoriesReducers from '../reducers/category';

const rootReducer = combineReducers({
  categories: categoriesReducers,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
