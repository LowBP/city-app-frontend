import React, { useState } from 'react';
import { ICity } from '../../Types';
import CountryFlag from '../UI/CountryFlag/CountryFlag';
import { formatNumberToK } from '../../helpers/utils';
import CityDetailsModal from '../CityDetailsModal/CityDetailsModal';

interface CityCardProps {
    city: ICity;
    lastBookElementRef?: React.RefCallback<Element>;
}

const CityCard: React.FC<CityCardProps> = ({ city, lastBookElementRef }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const onCloseModal = () => {
        setModalOpen(prevState => !prevState);
    }

    const showDetailsView = () => {
        setModalOpen(true);
    }

    return (
        <>
            <div
                className="flex items-center justify-center min-h-24 rounded smoothing-antialiased shadow-md hover:cursor-pointer transition-transform transform hover:shadow-lg"
                onClick={showDetailsView}
                ref={lastBookElementRef}
            >
                <div
                    className="border-r border-b border-l border-gray-300 border-t bg-white rounded-b rounded-r rounded-t p-5 flex flex-col justify-between leading-normal lg:sm:h-60 w-full"
                >
                    <div >
                        <h1
                            className="text-2xl font-medium text-gray-600 pb-3"
                        >
                            {city.name}
                        </h1>
                        <div className="flex justify-between mb-3">
                            <div className="pr-0 flex gap-4 flex-col">

                                {/* continent details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-bold'>
                                            Continent
                                        </div>
                                    </div>
                                    <div>
                                        <div>{city.continent}</div>
                                    </div>
                                </div>

                                {/* population details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-bold'>
                                            Population
                                        </div>
                                    </div>
                                    <div>
                                        <div>{formatNumberToK(city.population)}</div>
                                    </div>
                                </div>

                            </div>

                            <div className="pr-0 flex gap-4 flex-col">

                                {/* country details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-bold'>
                                            Country
                                        </div>
                                    </div>
                                    <div>
                                        <div>{city.country ? <CountryFlag className='' country={city.country} /> : city.country}</div>
                                    </div>
                                </div>

                                {/* founded details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-bold'>
                                            Founded
                                        </div>
                                    </div>
                                    <div>
                                        <div>{city.founded}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='text-gray-600 font-bold pb-2'>Landmarks</div>
                            <div className="font-light">{city.landmarks?.join(', ')}</div>
                        </div>


                    </div>
                </div>
            </div>
            <CityDetailsModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} cityDetail={city} />
        </>
    )
};

export default CityCard;
