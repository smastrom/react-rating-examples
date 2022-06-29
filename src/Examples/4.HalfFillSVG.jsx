import { Rating } from 'react-advanced-rating';

export const HalfFillSVG = () => (
  <div
    style={{
      maxWidth: 200,
      width: '100%',
    }}
  >
    <Rating readOnly value={0.29} />
    <Rating readOnly value={1.44} />
    <Rating readOnly value={2.31} />
    <Rating readOnly value={3.48} />
    <Rating readOnly value={4.52} />
  </div>
);

export const HalfFillSVGCode = `
const App = () => (
  <div style={{ maxWidth: 200, width: '100%' }}>
    <Rating readOnly value={0.29} />
    <Rating readOnly value={1.44} />
    <Rating readOnly value={2.31} />
    <Rating readOnly value={3.48} />
    <Rating readOnly value={4.52} />
  </div>
);`;
