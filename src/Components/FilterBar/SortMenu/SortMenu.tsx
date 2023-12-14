import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { SortIcon } from "../../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesStart } from "../../../Store/actions";
import { getSearch } from "../../../Store/selectors";

interface SortMenuProps { }

const SortMenu: React.FC<SortMenuProps> = memo(() => {
    const dispatch = useDispatch();
    const search = useSelector(getSearch);


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("");

    const handleOutsideClick = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {

        if (isMenuOpen) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen, handleOutsideClick]);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    const onClear = () => {
        setIsMenuOpen(false);
        setSortOrder('');
        setSortBy('')
        handleSort('', '')


    };

    const handleSortChange = (option: string) => {
        setSortOrder("")
        setSortBy(option);

    };

    const onApplyAsc = () => {
        handleSort(sortBy, 'asc')
        setSortOrder('asc')

    }

    const onApplyDesc = () => {
        handleSort(sortBy, 'desc')
        setSortOrder('desc')
    }

    const handleSort = (sortBy: string, sortOrder: string) => {
        dispatch(fetchCitiesStart(1, search, { sortBy, sortOrder }));
    };
    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                type="button"
                className="ml-2 p-2 rounded-md bg-gray-200"
                id="sort-menu"
                onClick={toggleMenu}
            >
                <SortIcon />
                {sortOrder && (
                    <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
                )}
            </button>
            {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="sort-menu"
                    >
                        <SortMenuItem
                            option="name"
                            label="City Name"
                            onChange={handleSortChange}
                            currentOption={sortBy}
                            sortOrder={sortOrder}
                        />

                        <SortMenuItem
                            option="population"
                            label="Population"
                            onChange={handleSortChange}
                            currentOption={sortBy}
                            sortOrder={sortOrder}

                        />
                        <SortMenuItem
                            option="founded"
                            label="Founded"
                            onChange={handleSortChange}
                            currentOption={sortBy}
                            sortOrder={sortOrder}

                        />


                        <div className="flex justify-end px-4 py-2">
                            <button
                                className="text-black font-light px-2 py-1 "
                                onClick={onClear}
                            >
                                Clear
                            </button>
                            <button
                                className="mr-2 bg-gray-500 font-light text-white px-2 py-1 rounded"
                                onClick={onApplyAsc}
                            >
                                ↑
                            </button>
                            <button
                                className="mr-2 bg-gray-500 font-light text-white px-2 py-1 rounded"
                                onClick={onApplyDesc}
                            >
                                ↓
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});
SortMenu.displayName = 'SortMenu';
export default SortMenu;

interface SortMenuItemProps {
    option: string;
    label: string;
    onChange: (option: string) => void;
    currentOption: string;
    sortOrder: string
}

const SortMenuItem: React.FC<SortMenuItemProps> = ({
    option,
    label,
    onChange,
    currentOption,
    sortOrder
}) => (
    <label className="block w-full">

        <div className="flex items-center px-4 py-2 text-sm cursor-pointer justify-between">

            <span className="flex-grow">
                <input
                    type="radio"
                    value={option}
                    checked={currentOption === option}
                    onChange={() => onChange(option)}
                    className="mr-2 cursor-pointer"
                />
                {label}
                <span className="ml-2">

                    {currentOption === option && sortOrder === 'asc' && '↑'}
                    {currentOption === option && sortOrder === 'desc' && '↓'}
                </span>
            </span>
        </div>
    </label>
);
