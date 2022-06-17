import { useEffect, useState } from 'react';

const currentLocation = () => window.location.hash.replace('#', '') || '/';

export const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation());

  useEffect(() => {
    const handler = () => {
      setLocation(currentLocation());
    };

    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return [location];
};
