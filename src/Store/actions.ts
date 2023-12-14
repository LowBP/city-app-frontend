

import { ActionTypes, ICityResponse, ISortQuery } from './types';

export function fetchCitiesStart(pageNumber: number, search?: string, sortQuery?: ISortQuery) {
  return {
    type: ActionTypes.FETCH_CITIES_START,
    payload: {
      pageNumber,
      search,
      sortQuery
    }
  };
}

export function fetchCitiesSuccess(payload: ICityResponse) {
  return {
    type: ActionTypes.FETCH_CITIES_SUCCESS,
    payload,
  };
}

export function fetchCitiesFailure() {
  return {
    type: ActionTypes.FETCH_CITIES_FAILURE,
  };
}
