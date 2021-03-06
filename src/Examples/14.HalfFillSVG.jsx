import { Rating } from '@smastrom/react-rating';

export const HalfFillSVG = () => (
  <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
    <div
      style={{
        maxWidth: 180,
        width: '100%',
      }}
    >
      <Rating readOnly value={0.29} />
      <Rating readOnly value={1.44} />
      <Rating readOnly value={2.31} />
      <Rating readOnly value={3.48} />
      <Rating readOnly value={4.52} />
    </div>

    <Rating style={{ maxWidth: 30 }} readOnly orientation="vertical" value={4.52} />
  </div>
);

export const HalfFillSVGCode = `
const App = () => (
  <div>
    <div style={{ maxWidth: 180, width: '100%' }}>
      <Rating readOnly value={0.29} />
      <Rating readOnly value={1.44} />
      <Rating readOnly value={2.31} />
      <Rating readOnly value={3.48} />
      <Rating readOnly value={4.52} />
    </div>
    <Rating
      style={{ maxWidth: 30 }}
      readOnly orientation="vertical"
      value={4.52}
    />
  </div>
);`;
