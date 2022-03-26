import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas/sagas';

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {weather: weatherReducer}, // root reducer
  middleware: [saga],
 
});

saga.run(rootSaga)

export default store;
