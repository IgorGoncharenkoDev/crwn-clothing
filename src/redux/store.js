import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

// setting up middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// creating a persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
