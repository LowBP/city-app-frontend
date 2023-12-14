import React from "react";
import { useDispatch } from "react-redux";
import { fetchCitiesStart } from "../../../Store/actions";
import { ClearIcon, SearchIcon } from "../../UI/Icons";


const SearchInput: React.FC = () => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = React.useState("");

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        dispatch(fetchCitiesStart(1, searchTerm));
    };

    const handleClear = () => {
        setSearchTerm("");
        dispatch(fetchCitiesStart(1, ""));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            handleSearch();
        }
    };


    return (
        <div className="flex">
            <div className="relative flex items-center w-80 max-[492px]:w-48">
                <input
                    type="text"
                    placeholder="Search city details..."
                    className="border p-2 rounded-l focus:outline-none w-full"
                    value={searchTerm}
                    onChange={onChangeInput}
                    onKeyDown={handleKeyDown}
                />
                {searchTerm && (
                    <div
                        className="absolute top-0 right-0 h-full px-2  rounded-r flex items-center"
                        onClick={handleClear}
                        data-testid="clear-button"
                    >
                        <ClearIcon />
                    </div>
                )}
            </div>
            <button
                className="flex items-center bg-gray-200 py-2 px-4 rounded-r text-gray-800"
                onClick={handleSearch}
            >
                <SearchIcon />
                {/* <span className="ml-2">Search</span> */}
            </button>
        </div>
    );
};

export default SearchInput;
