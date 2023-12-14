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

interface TableRowProps {
    label: string;
    value: string | JSX.Element;
}

const TableRow: React.FC<TableRowProps> = ({ label, value }) => (
    <tr>
        <td className="font-semibold w-1/3 pb-5">{label}:</td>
        <td className='pb-5'>{value}</td>
    </tr>
);

const CityDetailsModal: React.FC<CityDetailsModal> = ({ isModalOpen, onCloseModal, cityDetail }) => {
    const mapCenter = { lat: parseInt(cityDetail.latitude, 10), lng: parseInt(cityDetail.longitude, 10) };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseModal}>
            <h1 className="text-xl font-semibold mb-4">City Detail of &quot;{cityDetail.name}&quot;</h1>
            <div className="pt-4 pr-4 pb-4 max-[492px]:p-2">
                <table className="w-full">
                    <tbody>
                        <TableRow label="Name" value={cityDetail.name} />
                        <TableRow label="Native Name" value={cityDetail.name_native} />
                        <TableRow label="Continent" value={cityDetail.continent} />
                        <TableRow label="Country" value={cityDetail.country ? <CountryFlag country={cityDetail.country} data-testid="country-flag" /> : cityDetail.country} />
                        <TableRow label="Founded" value={cityDetail.founded} />
                        <TableRow label="Population" value={formatNumberToK(cityDetail.population)} />
                        <TableRow label="Landmarks" value={cityDetail.landmarks?.join(', ')} />
                    </tbody>
                </table>
                <GoogleMap center={mapCenter} zoom={11} />
            </div>
        </Modal>
    );
};

export default CityDetailsModal;
