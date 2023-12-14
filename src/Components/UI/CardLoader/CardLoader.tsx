import React from 'react';
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const CardLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={`flex items-center justify-center min-h-24 rounded ${isLoading ? 'min-h-' : ''}`}>
            {isLoading && (
                <div className="border-r border-b border-l border-gray-300 border-t bg-white rounded-b rounded-r rounded-t p-5 flex flex-col justify-between leading-normal h-60 w-full">
                    <div>
                        <div className="flex justify-between mb-3">
                            <div className="pr-0 flex gap-8 flex-col">
                                <SkeletonLoader className="max-[492px]:w-20 w-28 h-3 mt-2" />
                                <SkeletonLoader className="max-[492px]:w-40 w-80 h-2 mt-6" />
                                <SkeletonLoader className="max-[492px]:w-40 w-80 h-2 mt-1" />
                                <SkeletonLoader className="max-[492px]:w-40 w-80 h-2 mt-1" />
                            </div>
                            <SkeletonLoader className="max-[492px]:w-16 w-20 h-8" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardLoader;