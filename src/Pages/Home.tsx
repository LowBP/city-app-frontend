import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CityList from '../Components/CityList/CityList';
import Sidebar from '../Components/Sidebar/Sidebar';
import FilterBar from '../Components/FilterBar/FilterBar';
import Page500 from '../Pages/Page500';
import { useSelector } from 'react-redux';
import { getCitiesFetchStatus } from '../Store/selectors';
import { FetchStatus } from '../Types';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const status = useSelector(getCitiesFetchStatus)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add shadow class when scrolled
            setIsScrolled(window.scrollY > 0);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        if (status === FetchStatus.FAILURE) {
            navigate('/error-page');
        }
    }, [navigate, status])

    return (
        <div>
            <Sidebar />
            <div className="flex-1  sm:ml-64 max-[492px]:p-2">
                <div className={`sticky top-0 bg-white z-10 ${isScrolled ? 'shadow-md' : ''}`}>
                    <div className="max-[492px]:pt-2 max-[492px]:pb-2 p-6 pt-6 pb-6 font-bold text-xl">
                        City Details
                    </div>

                    <div className='pl-8 pr-8 pb-2 max-[492px]:p-3'>

                        <FilterBar />
                    </div>

                </div>

                <div className="p-8 pt-4 max-[492px]:p-2">
                    <Routes>
                        <Route path="/cities" element={<CityList />} />
                        <Route path="/error-page" element={<Page500 />} />
                        <Route path="*" element={<CityList />} />
                    </Routes>

                </div>
            </div>

        </div>
    );
};

export default Home;
