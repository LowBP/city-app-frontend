import { FetchStatus } from '../types';



import { ActionTypes, IFetchCitiesActions, ICityState } from './types';

const initialState: ICityState = {
  cities: [],
  fetchStatus: null,
  currentPage: 1,
  pageSize: 10,
  totalCities: 0,
  totalPages: 0,
};

function reducer(state: ICityState | undefined = initialState, action: IFetchCitiesActions): ICityState {
  switch (action.type) {
    case ActionTypes.FETCH_CITIES_START:

      return {
        ...state,
        cities: action.payload.pageNumber === 1 ? [] : state.cities,
        fetchStatus: FetchStatus.PENDING,
      };
    case ActionTypes.FETCH_CITIES_SUCCESS:

      return {
        ...state,
        ...action.payload,
        cities: Array.from(new Set([...state.cities, ...action.payload.cities])),
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ActionTypes.FETCH_CITIES_FAILURE:
      return {
        ...state,
        fetchStatus: FetchStatus.FAILURE,
      };
    default:
      return state;
  }
}

export default reducer;

