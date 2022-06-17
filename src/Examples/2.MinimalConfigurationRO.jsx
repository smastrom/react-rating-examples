import { Rating } from 'react-advanced-rating';

export const MinimalConfigurationRO = () => <Rating value={3} onChange={() => {}} />;

export const MinimalConfigurationROCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <Rating
        value={ratingValue}
        onChange={(currentValue) => setRatingValue(currentValue)}
      />
    </div>
  )
};

const App1 = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <Rating
        value={ratingValue}
        onChange={(currentValue) => setRatingValue(currentValue)}
      />
    </div>
  )
};


const App2 = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <Rating
        value={ratingValue}
        onChange={(currentValue) => setRatingValue(currentValue)}
      />
    </div>
  )
};
`;
