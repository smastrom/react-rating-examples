import { Rating } from 'react-advanced-rating';

import './17.CustomCSS.css';

const customStyles = {
  itemShapes: (
    <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
  ),
};

export const CustomCSS = () => (
  <div className="container">
    <Rating
      readOnly
      value={3}
      itemStyles={customStyles}
      className="custom-classname"
      transition="none"
      spaceBetween="none"
      spaceInside="none"
      radius="none"
    />
  </div>
);

export const CustomCSSCodeCSS = `
.container {
  max-width: 200px;
  width: 100%;
}
  
.custom-classname {
  gap: 5px;
}
  
.custom-classname .rar--svg {
  padding: 5px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
}
  
.custom-classname .rar--on .rar--svg {
  fill: MediumSeaGreen;
  background: MintCream;
  border-color: MediumSeaGreen;
}
  
.custom-classname .rar--off .rar--svg {
  fill: Tomato;
  background: AntiqueWhite;
  border-color: Tomato;
}
  
@media (min-width: 610px) {
  .container {
    max-width: 300px;
  }
  
  .custom-classname {
    gap: 10px;
  }
  
  .custom-classname .rar--svg {
    padding: 10px;
    border-width: 2px;
    border-radius: 10px;
  }
}
`;

export const CustomCSSCode = `
import { Star } from "react-rating-input";

import './custom-styles.css';

// 1. Omit the properties styled via CSS
const customStyles = {
  itemShapes: Star;
};

const App = () => (
  <div className="container">
    <Rating
      readOnly
      value={3}
      itemStyles={customStyles}
      className="custom-classname"

      // 2. Set to "none" any styled prop as well
      spaceBetween="none"
      spaceInside="none"
      radius="none"
    />
  </div>
)`;
