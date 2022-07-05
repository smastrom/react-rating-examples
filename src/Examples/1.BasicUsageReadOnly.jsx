import { Rating } from '@smastrom/react-rating';

export const BasicUsageReadOnly = () => (
  <Rating
    style={{
      maxWidth: 180,
    }}
    value={3}
    readOnly
  />
);

export const BasicUsageReadOnlyCode = `
const App = () => (
  <Rating
    style={{ maxWidth: 180 }}
    value={3}
    readOnly
  />
)`;
