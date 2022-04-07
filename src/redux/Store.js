import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/es/storage';
// ROOT REDUCER
import rootReducer from './RootReducer';
// Imports: Redux Root Saga
import {rootSaga} from './RootSaga';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // storage,
  whitelist: ['login'],
};

const perReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(perReducer, {}, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export {store, persistor};
