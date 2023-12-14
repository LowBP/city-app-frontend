import { configureStore, Middleware, Reducer } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cityReducer from './reducers';
import citySaga from './sagas';
import { ICityState } from './types';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    city: cityReducer as Reducer<ICityState>,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware as Middleware),
});

sagaMiddleware.run(citySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
