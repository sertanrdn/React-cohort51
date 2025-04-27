import { useState, useEffect, useDebugValue } from 'react';

export function useScreenSizeRange(minWidth, maxWidth, label) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setMatches(width >= minWidth && width <= maxWidth);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [minWidth, maxWidth]);

    useDebugValue(label || `${minWidth}-${maxWidth}`, label => `Screen Range: ${label}`);

    return matches;
}