import { RootState } from './store';
export function getCities(state: RootState) {
  return state.city.cities;
}

export function getRenderedTotalCities(state: RootState) {
  return state.city.cities?.length;

}

export function getCitiesFetchStatus(state: RootState) {
  return state.city.fetchStatus;
}

export function getTotalCities(state: RootState) {
  return state.city.totalCities;
}

export function getCurrentPage(state: RootState) {
  return state.city.currentPage;
}

export function getTotalPages(state: RootState) {
  return state.city.totalPages;
}

export function getHasMoreCities(state: RootState) {
  return state.city.currentPage < state.city.totalPages;
}

export function getSearch(state: RootState) {
  return state.city.search;
}

export function getSortQuery(state: RootState) {
  return state.city.sortQuery;
}
