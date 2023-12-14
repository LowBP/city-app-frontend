import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InfoIcon, ToggleIcon } from '../UI/Icons';


const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalContainerRef = useRef(null);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            const modalContainer = modalContainerRef.current as HTMLDivElement | null;

            if (modalContainer && !modalContainer.contains(event.target as Node)) {
                setIsOpen(false);
            }
        },
        [modalContainerRef]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <>
            <button
                ref={modalContainerRef}
                id="default_sidebar"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                <span className="sr-only">Open sidebar</span>
                <ToggleIcon />
            </button>


            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${isOpen ? 'transform-none' : '-translate-x-full sm:translate-x-0'
                    }`}
                aria-label="Sidebar"
            >
                <div className="h-full py-4 overflow-y-auto bg-gray-100">
                    <Link to="/cities" >
                        <h1 className="text-center text-2xl py-5">
                            <span>City</span>
                            <span className="font-black">Explorer</span>
                        </h1>
                    </Link>


                    <ul className="space-y-2 font-medium">
                        <li
                            className={`transition-opacity duration-300 bg-white border-l-4 border-red-700 `}
                        >
                            <Link to="/cities"
                                className="flex items-center p-5 text-gray-900 hover:bg-white group "

                            >
                                <InfoIcon />
                                <span className="ml-3 hover:text-black">City Details</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
            {isOpen && <div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"></div>}
        </>

    );
};
export default Sidebar;