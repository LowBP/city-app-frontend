

import { all, call, put, takeEvery } from 'redux-saga/effects';
import ApiService from '../services/apiService';
import { ActionTypes, ICityResponse, IFetchCitiesStartAction } from './types';
import { fetchCitiesFailure, fetchCitiesSuccess } from './actions';

const API = new ApiService();

function* fetchCitiesSaga(action: IFetchCitiesStartAction) {
  try {
    const { pageNumber, search, sortQuery } = action.payload;
    const cities: ICityResponse = yield call(API.getCities, pageNumber, search, sortQuery);
    yield put(fetchCitiesSuccess(cities));
  } catch (error) {
    yield put(fetchCitiesFailure());
  }
}

export default function* () {
  yield all([takeEvery(ActionTypes.FETCH_CITIES_START, fetchCitiesSaga)]);
}

