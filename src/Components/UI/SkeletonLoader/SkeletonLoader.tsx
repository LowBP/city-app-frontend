import React, { CSSProperties } from 'react';
import './SkeletonLoader.css';

const LOADER_TYPES = { rectangle: 'rectangle' } as const;

const LOADER_CSS_CLASSES: Record<typeof LOADER_TYPES[keyof typeof LOADER_TYPES], string> = {
    [LOADER_TYPES.rectangle]: 'rounded',
};

type LoaderTypesKeys = keyof typeof LOADER_TYPES;
type LoaderTypesValues = (typeof LOADER_TYPES)[LoaderTypesKeys];

const SHIMMER_COLOR = '#ffffff';

const isHexColor = (hexColor: string): boolean => {
    const hex = hexColor.replace('#', '');

    return (
        typeof hexColor === 'string' &&
        hexColor.startsWith('#') &&
        hex.length === 6 &&
        !isNaN(Number('0x' + hex))
    );
};

const hexToRgb = (hex: string): string => `${hex.match(/\w\w/g)?.map((x) => +`0x${x}`)}`;

interface ShimmerLoaderProps {
    type?: LoaderTypesValues;
    bgClass?: string;
    shimmerColor?: string;
    className?: string;
}

const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({ type = LOADER_TYPES.rectangle, className, bgClass = 'bg-gray-300', shimmerColor = SHIMMER_COLOR }) => {
    const shimmerStyle: CSSProperties = {
        backgroundImage: `linear-gradient(90deg, rgba(${isHexColor(shimmerColor) ? hexToRgb(shimmerColor) : SHIMMER_COLOR}, 0) 0%, rgba(${isHexColor(shimmerColor) ? hexToRgb(shimmerColor) : SHIMMER_COLOR}, 0.2) 20%, rgba(${isHexColor(shimmerColor) ? hexToRgb(shimmerColor) : SHIMMER_COLOR}, 0.5) 60%, rgba(${isHexColor(shimmerColor) ? hexToRgb(shimmerColor) : SHIMMER_COLOR}, 0))`,
    };

    const loaderClass = LOADER_CSS_CLASSES[type];

    return (
        <div className={[bgClass, className, loaderClass, 'relative overflow-hidden'].join(' ')}>
            <div className="shimmer absolute top-0 right-0 bottom-0 left-0" style={shimmerStyle}></div>

        </div>
    );
};


export default ShimmerLoader;
