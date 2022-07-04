/* eslint-disable no-promise-executor-return */
import { useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const WithAsyncOp = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const [isReadOnly, setIsReadOnly] = useState(false);
  const [status, setStatus] = useState('Idle');

  const [fakeError, setFakeError] = useState(false);

  const handleAsyncSubmission = async (selectedValue) => {
    try {
      setIsReadOnly(true);
      setStatus('Submitting');
      setRatingValue(selectedValue);
      await new Promise((resolve, reject) => setTimeout(fakeError ? reject : resolve, 2000));
      setStatus('Submitted');
    } catch (err) {
      setStatus('Error');
      setIsReadOnly(false);
      setRatingValue(0);
    }
  };

  return (
    <div
      style={{
        maxWidth: 180,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Rating readOnly={isReadOnly} value={ratingValue} onChange={handleAsyncSubmission} />
      <small>
        {status === 'Submitting' && 'Submitting review...'}
        {status === 'Submitted' && `Success! Your rating: ${ratingValue}`}
        {status === 'Error' && 'There was en error, please try again.'}
      </small>

      {status === 'Submitted' && (
        <button
          type="button"
          style={{
            background: 'var(--blue-primary-color)',
            color: 'white',
            border: 'none',
            fontSize: '0.925rem',
            padding: '0.2em 0.4em',
            borderRadius: '5px',
            width: 'max-content',
            marginTop: '10px',
          }}
          onClick={() => {
            setRatingValue(0);
            setIsReadOnly(false);
            setStatus('Idle');
          }}
        >
          Vote Again
        </button>
      )}

      {(status === 'Idle' || status === 'Error') && (
        <label htmlFor="error_async" style={{ marginTop: '10px' }}>
          <input
            type="checkbox"
            id="error_async"
            style={{ marginRight: '5px' }}
            defaultChecked={fakeError}
            onChange={() => setFakeError(!fakeError)}
          />
          Simulate error
        </label>
      )}
    </div>
  );
};

export const WithAsyncOpCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleAsyncSubmission = async (selectedValue) => {
    try {
      setIsReadOnly(true);
      setRatingValue(selectedValue);
      await new Promise((resolve) => setTimeout(() => resolve("Successfully submitted!"), 2000));
    } catch (err) {
      setIsReadOnly(false);
      setRatingValue(0);
    }
  };
  
  return (
    <div style={{ maxWidth: 180, width: '100%' }}>
      <Rating
        readOnly={isReadOnly}
        value={ratingValue}
        onChange={handleAsyncSubmission}
      />
    </div>
  );
};`;
