import { Action } from 'redux';
import { FetchStatus, ICity } from '../Types';

export interface ICityState {
  cities: ICity[];
  fetchStatus: FetchStatus | null;
  currentPage: number;
  pageSize: number;
  totalCities: number;
  totalPages: number;

}

export interface ICityResponse {
  cities: ICity[];
  currentPage: number;
  pageSize: number;
  totalCities: number;
  totalPages: number;
}

export interface ISortQuery { sortBy: string, sortOrder: string }


export enum ActionTypes {
  FETCH_CITIES_START = '[cities] fetch cities start',
  FETCH_CITIES_SUCCESS = '[cities] fetch cities success',
  FETCH_CITIES_FAILURE = '[cities] fetch cities failure',
}

export interface IFetchCitiesStartAction extends Action {
  type: ActionTypes.FETCH_CITIES_START;
  payload: {
    pageNumber: number;
    search: string
    sortQuery: ISortQuery
  };
}

export interface IFetchCitiesSuccessAction extends Action {
  type: ActionTypes.FETCH_CITIES_SUCCESS;
  payload: ICityState;
}

export interface IFetchCitiesFailureAction extends Action {
  type: ActionTypes.FETCH_CITIES_FAILURE;
}

export type IFetchCitiesActions =
  | IFetchCitiesStartAction
  | IFetchCitiesSuccessAction
  | IFetchCitiesFailureAction;
