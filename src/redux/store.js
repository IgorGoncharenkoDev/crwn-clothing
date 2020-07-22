import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// setting up middlewares
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// running and adding in individual sagas that we are going to write
// inside .run() we pass each individual saga
sagaMiddleware.run(fetchCollectionsStart);

// creating a persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
