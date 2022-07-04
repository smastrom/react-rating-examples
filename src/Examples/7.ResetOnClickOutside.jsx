import { useEffect, useRef, useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const ResetOnClickOutside = () => {
  const ratingRef = useRef(null);
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    if (ratingValue > 0) {
      const handleOutsideClick = (event) => {
        if (!ratingRef.current.contains(event.target)) {
          setRatingValue(0);
        }
      };

      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [ratingValue]);

  return (
    <div
      style={{
        maxWidth: 180,
        width: '100%',
      }}
    >
      <Rating
        ref={ratingRef}
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
    </div>
  );
};

export const ResetOnClickOutsideCode = `
const App = () => {
  const ratingRef = useRef(null);
  const [ratingValue, setRatingValue] = useState(0);
  
  useEffect(() => {
    if (ratingValue > 0) {
      const handleOutsideClick = (event) => {
        if (!ratingRef.current.contains(event.target)) {
          setRatingValue(0);
        }
      };

      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [ratingValue]);

  return (
    <div style={{ maxWidth: 180, width: '100%' }}>
      <Rating
        ref={ratingRef}
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
    </div>
  );
};`;
