import React from "react";
import { useSelector } from "react-redux";
import { getRenderedTotalCities, getTotalCities } from "../../store/selectors";
import SearchInput from "./SearchInput/SearchInput";
import SortMenu from "./SortMenu/SortMenu";

const FilterBar: React.FC = () => {

    const totalRenderedCities = useSelector(getRenderedTotalCities);
    const totalCities = useSelector(getTotalCities);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 justify-between max-[492px]:flex-col">
                <SearchInput />

                <SortMenu />
            </div>
            {totalRenderedCities > 0 && totalCities && (
                <div className="justify-center max-[492px]:flex">
                    <p className="text-xs font-light ">
                        Displaying{" "}
                        <span className="font-bold"> {totalRenderedCities} </span> cities out
                        of <span className="font-bold"> {totalCities} </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default FilterBar;
