import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesStart } from '../../store/actions';
import { getCities, getCitiesFetchStatus, getCurrentPage, getHasMoreCities } from '../../store/selectors';
import CityCard from '../CityCard/CityCard';
import CardLoader from '../UI/CardLoader/CardLoader';
import { FetchStatus } from '../../types';

const CityList: React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch();

    const cities = useSelector(getCities);
    const status = useSelector(getCitiesFetchStatus)
    const hasMore = useSelector(getHasMoreCities)
    const currentPage = useSelector(getCurrentPage)
    const isLoading = status === FetchStatus.PENDING
    const isSuccess = status === FetchStatus.SUCCESS

    useEffect(() => {
        dispatch(fetchCitiesStart(pageNumber));
    }, [dispatch, pageNumber]);

    const observer = useRef<IntersectionObserver | null>(null);
    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && hasMore && !isLoading && isSuccess) {
                setPageNumber((currentPage) + 1);
            }
        },
        [hasMore, setPageNumber, currentPage, isLoading, isSuccess]
    );

    const lastBookElementRef = useCallback(
        (node: Element | null) => {
            if (isLoading || !node) return;

            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(handleIntersection);
            observer.current.observe(node);
        },
        [isLoading, handleIntersection]
    );

    return (
        <>
            {cities?.length === 0 && status === FetchStatus.SUCCESS &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8  font-extrabold text-red-500 text-xl max-[492px]:p-0">
                    No results found!
                </div>}

            <div className="grid gap-4 mb-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {(cities?.length || status === FetchStatus.SUCCESS) &&
                    cities.map((city, index) => <CityCard key={city.name + index} city={city} />)}

                {isLoading && Array(6).fill(null).map((_, index) => <CardLoader key={index} isLoading={true} />)}

                {hasMore && !isLoading && <div ref={lastBookElementRef}></div>}
            </div>
        </>

    );
};

export default CityList;
