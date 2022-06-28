import { Rating } from 'react-advanced-rating';

const customStyles = {
  svgChildNodes: (
    <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
  ),
  activeBoxColor: '#16A34A',
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

export const HalfFillBox = () => (
  <div
    style={{
      maxWidth: 200,
      width: '100%',
    }}
  >
    <Rating readOnly value={0.29} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={1.44} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={2.31} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={3.48} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={4.52} itemStyles={customStyles} halfFillMode="box" />
  </div>
);

export const HalfFillBoxCode = `

import { DefaultStar } from "react-advanced-rating";

const customStyles = {
  svgChildNodes: DefaultStar,
  activeBoxColor: '#16A34A',
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

const App = () => (
  <div style={{ maxWidth: 200, width: '100%'}}>
    <Rating readOnly value={0.29} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={1.44} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={2.31} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={3.48} itemStyles={customStyles} halfFillMode="box" />
    <Rating readOnly value={4.52} itemStyles={customStyles} halfFillMode="box" />
  </div>
);`;
