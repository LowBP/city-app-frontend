import React from 'react';
import Modal from '../UI/Modal/Modal';
import { ICity } from '../../Types';
import { formatNumberToK } from '../../helpers/utils';
import CountryFlag from '../UI/CountryFlag/CountryFlag';
import GoogleMap from '../UI/GoogleMap/GoogleMap';

interface CityDetailsModal {
    isModalOpen: boolean;
    onCloseModal: () => void;
    cityDetail: ICity
}

const CityDetailsModal: React.FC<CityDetailsModal> = ({ isModalOpen, onCloseModal, cityDetail }) => {
    const mapCenter = { lat: parseInt(cityDetail.latitude, 10), lng: parseInt(cityDetail.latitude, 10) };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseModal}>
            <h1 className="text-xl font-semibold mb-4">City Detail of &quot;{cityDetail.name}&quot;</h1>
            <div className="pt-4 pr-4 pb-4">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Name:</td>
                            <td className='pb-5'>{cityDetail.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Native Name:</td>
                            <td className='pb-5'>{cityDetail.name_native}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Continent:</td>
                            <td className='pb-5'>{cityDetail.continent}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Country:</td>
                            <td className='pb-5'>{cityDetail.country ? <CountryFlag country={cityDetail.country} /> : cityDetail.country}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Founded:</td>
                            <td className='pb-5'>{cityDetail.founded}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Population:</td>
                            <td className='pb-5'>{formatNumberToK(cityDetail.population)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold w-1/3 pb-5">Landmarks:</td>
                            <td className='pb-5'>{cityDetail.landmarks?.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
                <GoogleMap center={mapCenter} zoom={11} />
            </div>
        </Modal>
    );
};

export default CityDetailsModal;
