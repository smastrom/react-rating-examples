import { Star, Rating } from '@smastrom/react-rating';

const customStyles = {
  itemShapes: Star,
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

export const HalfFillBox = () => (
  <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
    <div
      style={{
        maxWidth: 180,
        width: '100%',
        display: 'grid',
        gap: 5,
      }}
    >
      <Rating
        readOnly
        value={0.29}
        itemStyles={customStyles}
        spaceBetween="small"
        halfFillMode="box"
      />
      <Rating
        readOnly
        value={1.44}
        itemStyles={customStyles}
        spaceBetween="small"
        halfFillMode="box"
      />
      <Rating
        readOnly
        value={2.31}
        itemStyles={customStyles}
        spaceBetween="small"
        halfFillMode="box"
      />
      <Rating
        readOnly
        value={3.48}
        itemStyles={customStyles}
        spaceBetween="small"
        halfFillMode="box"
      />
      <Rating
        readOnly
        value={4.52}
        itemStyles={customStyles}
        spaceBetween="small"
        halfFillMode="box"
      />
    </div>
    <div style={{ maxWidth: 30, width: '100%' }}>
      <Rating
        readOnly
        value={4.52}
        itemStyles={customStyles}
        orientation="vertical"
        halfFillMode="box"
        spaceBetween="small"
      />
    </div>
  </div>
);

export const HalfFillBoxCode = `

import { Star } from "@smastrom/react-rating";

const customStyles = {
  itemShapes: Star,
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

const App = () => (
  <div>
    <div style={{ maxWidth: 180, width: '100%' }}>
      <Rating readOnly value={0.29} itemStyles={customStyles} spaceBetween="small" halfFillMode="box" />
      <Rating readOnly value={1.44} itemStyles={customStyles} spaceBetween="small" halfFillMode="box" />
      <Rating readOnly value={2.31} itemStyles={customStyles} spaceBetween="small" halfFillMode="box" />
      <Rating readOnly value={3.48} itemStyles={customStyles} spaceBetween="small" halfFillMode="box" />
      <Rating readOnly value={4.52} itemStyles={customStyles} spaceBetween="small" halfFillMode="box" />
    </div>
    <div style={{ maxWidth: 30, width: '100%' }}>
      <Rating
        readOnly
        value={4.52}
        itemStyles={customStyles}
        orientation="vertical"
        halfFillMode="box"
        spaceBetween="small"
      />
    </div>
  </div>
);`;
