import { ISortQuery } from "../Store/types";
import { ICity } from "../Types";


export default class CITY {

  private readonly API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/';

  private fetchJSON = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status} error`);
    }

    return response.json();
  };

  public getCities = async (pageNumber: number, search: string = '', sortQuery?: ISortQuery): Promise<ICity[]> => {
    return this.fetchJSON(
      `${this.API_BASE}cities?page=${pageNumber}&search=${search}&sortBy=${sortQuery?.sortBy || ''}&sortOrder=${sortQuery?.sortOrder || ''}`
    );
  };
}
