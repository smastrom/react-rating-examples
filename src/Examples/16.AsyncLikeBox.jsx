import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

const Heart = (
  <path
    d="M236.787,27.648c-29.599,0-55.91,14.057-72.638,35.854c-16.727-21.797-43.039-35.854-72.638-35.854
    C40.971,27.648,0,68.619,0,119.16c0,113.246,164.149,181.491,164.149,181.491s164.149-67.216,164.149-181.491
    C328.299,68.619,287.327,27.648,236.787,27.648z"
  />
);

const customStyles = {
  itemShapes: Heart,
  itemStrokeWidth: 20,
  activeFillColor: '#EC4899',
  activeStrokeColor: '#EC4899',
  inactiveFillColor: 'white',
  inactiveStrokeColor: '#EC4899',
};

export const LikeBoxAsync = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const [isReadOnly, setIsReadOnly] = useState(false);
  const [status, setStatus] = useState('Idle');

  const handleAsyncLike = async (selectedValue) => {
    try {
      setIsReadOnly(true);
      setStatus('Submitting');
      if (selectedValue === 1) {
        setRatingValue(selectedValue);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(() => resolve('Liked!'), 2000));
        setStatus('Liked');
      } else {
        setRatingValue(selectedValue);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(() => resolve('Unliked!'), 2000));
        setStatus('Unliked');
      }
    } catch (err) {
      setRatingValue(0);
      setStatus('Idle');
    } finally {
      setIsReadOnly(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div
        style={{
          maxWidth: 60,
          width: '100%',
        }}
      >
        <Rating
          readOnly={isReadOnly}
          value={ratingValue}
          onChange={handleAsyncLike}
          itemStyles={customStyles}
          items={1}
          resetOnSecondClick
          invisibleLabel="Like / Unlike this post"
          invisibleItemLabels={[
            `${ratingValue === 0 ? 'Like this post' : 'Unlike this post'}`,
          ]}
        />
      </div>
      <div>
        {(status === 'Unliked' || status === 'Idle') &&
          ratingValue === 0 &&
          'Click to like this post'}
      </div>
      <div>
        {(status === 'Liked' || status === 'Idle') &&
          ratingValue === 1 &&
          'You like this post'}
      </div>
      <div>{status === 'Submitting' && 'Submitting...'}</div>
    </div>
  );
};

export const LikeBoxAsyncCode = `
const Heart = (
  <path
    d="M236.787,27.648c-29.599,0-55.91,14.057-72.638,35.854c-16.727-21.797-43.039-35.854-72.638-35.854
    C40.971,27.648,0,68.619,0,119.16c0,113.246,164.149,181.491,164.149,181.491s164.149-67.216,164.149-181.491
    C328.299,68.619,287.327,27.648,236.787,27.648z"
  />
); // Source: https://www.svgrepo.com/svg/171367/heart
  
const customStyles = {
  itemShapes: Heart,
  itemStrokeWidth: 20,
  activeFillColor: '#EC4899',
  activeStrokeColor: '#EC4899',
  inactiveFillColor: 'white',
  inactiveStrokeColor: '#EC4899',
};
  
const AsLikeBox = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleAsyncLike = async (selectedValue) => {
    try {
      setIsReadOnly(true);
      if (selectedValue === 1) {
        setRatingValue(selectedValue);
        await new Promise((resolve) => setTimeout(() => resolve('Liked!'), 2000));
      } else {
        setRatingValue(selectedValue);
        await new Promise((resolve) => setTimeout(() => resolve('Unliked!'), 2000));
      }
    } catch (err) {
      setRatingValue(0);
    } finally {
      setIsReadOnly(false);
    }
  };

  return (
    <div style={{ maxWidth: 60, width: '100%' }}>
      <Rating
        readOnly={isReadOnly}
        value={ratingValue}
        onChange={handleAsyncLike}
        itemStyles={customStyles}
        items={1}
        resetOnSecondClick
        invisibleLabel="Like or Unlike this post"
        invisibleItemLabels={[
          \`\${ratingValue === 0 ? 'Like this post' : 'Unlike this post'}\`,
        ]}
      />
    </div>
  );
};`;
