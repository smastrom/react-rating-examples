/* eslint-disable no-alert */
import { useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const MultipleFormRatings = () => {
  const [formData, setFormData] = useState({
    name: '',
    cleanliness: 2,
    staff: 3,
    location: 0,
  });

  const handleSubmit = () => {
    alert(JSON.stringify(formData, undefined, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: '2px solid #9CA3AF',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: 180,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <label
        htmlFor="name"
        style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '100%' }}
      >
        <span>Your name</span>
        <input
          type="text"
          id="name"
          onChange={(event) =>
            setFormData((prevData) => ({ ...prevData, name: event.target.value }))
          }
        />
      </label>

      <div role="group">
        <h2 id="cleanliness_rating">Cleanliness</h2>
        <Rating
          value={formData.cleanliness}
          visibleLabelId="cleanliness_rating"
          onChange={(selectedValue) =>
            setFormData((prevData) => ({ ...prevData, cleanliness: selectedValue }))
          }
        />
      </div>

      <div role="group">
        <h2 id="staff_rating">Staff</h2>
        <Rating
          value={formData.staff}
          visibleLabelId="staff_rating"
          onChange={(selectedValue) =>
            setFormData((prevData) => ({ ...prevData, staff: selectedValue }))
          }
        />
      </div>

      <div role="group">
        <h2 id="location_rating">Location</h2>
        <Rating
          value={formData.location}
          visibleLabelId="location_rating"
          onChange={(selectedValue) =>
            setFormData((prevData) => ({ ...prevData, location: selectedValue }))
          }
        />
      </div>

      <button
        style={{
          width: '100%',
          border: 'none',
          backgroundColor: 'var(--blue-primary-color)',
          borderRadius: '5px',
          padding: '0.2em',
          color: 'white',
        }}
        type="submit"
      >
        Submit review
      </button>
    </form>
  );
};

export const MultipleFormRatingsCode = `
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    cleanliness: 2,
    staff: 3,
    location: 0,
  });
  
  const handleSubmit = () => {
    alert(JSON.stringify(formData, undefined, 2));
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      maxWidth: 180,
      width: '100%',
    >
      <label htmlFor="name">
        Your name
          <input
            type="text"
            id="name"
            onChange={(event) =>
              setFormData((prevData) => ({ ...prevData, name: event.target.value }))
            }
          />
        </label>
  
        <div role="group">
          <h2 id="cleanliness_rating">Cleanliness</h2>
          <Rating
            value={formData.cleanliness}
            visibleLabelId="cleanliness_rating"
            onChange={(selectedValue) =>
              setFormData((prevData) => ({ ...prevData, cleanliness: selectedValue }))
            }
          />
        </div>
  
        <div role="group">
          <h2 id="staff_rating">Staff</h2>
          <Rating
            value={formData.staff}
            visibleLabelId="staff_rating"
            onChange={(selectedValue) =>
              setFormData((prevData) => ({ ...prevData, staff: selectedValue }))
            }
          />
        </div>

        <div role="group">
          <h2 id="location_rating">Location</h2>
          <Rating
            value={formData.location}
            visibleLabelId="location_rating"
            onChange={(selectedValue) =>
              setFormData((prevData) => ({ ...prevData, location: selectedValue }))
            }
          />
        </div>
  
        <button type="submit">Submit review</button>
      </form>
    );
  };
`;
