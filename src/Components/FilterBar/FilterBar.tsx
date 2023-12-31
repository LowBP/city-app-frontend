import React from "react";
import { useSelector } from "react-redux";
import { getRenderedTotalCities, getTotalCities } from "../../Store/selectors";
import SearchInput from "./SearchInput/SearchInput";
import SortMenu from "./SortMenu/SortMenu";

const FilterBar: React.FC = React.memo(() => {

    const totalRenderedCities = useSelector(getRenderedTotalCities);
    const totalCities = useSelector(getTotalCities);

    return (
        <div className="flex flex-col gap-2 max-[492px]:gap-4">
            <div className="flex items-center gap-4 justify-between ">
                <SearchInput />

                <SortMenu />
            </div>
            {totalRenderedCities > 0 && totalCities && (
                <div className="justify-center">
                    <p className="text-xs font-light ">
                        Displaying{" "}
                        <span className="font-bold"> {totalRenderedCities} </span> cities out
                        of <span className="font-bold"> {totalCities} </span>
                    </p>
                </div>
            )}
        </div>
    );
});
FilterBar.displayName = 'FilterBar';
export default FilterBar;
