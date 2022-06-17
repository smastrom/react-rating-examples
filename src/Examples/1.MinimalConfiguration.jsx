import { Rating } from 'react-advanced-rating';

export const MinimalConfiguration = () => <Rating value={3} onChange={() => {}} />;

export const MinimalConfigurationCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 600, width: "100%" }}>
      <Rating
        value={ratingValue}
        onChange={(currentValue) => setRatingValue(currentValue)}
      >
    </div>
  )
};
`;
