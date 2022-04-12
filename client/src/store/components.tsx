import * as React from 'react';

import './components.scss';

// import { getCN } from '@miq/utiljs';
import { AttributeType } from '@shopy/shopjs';

export type ProductAttributeListProps = {
  attributes: AttributeType[];
};
export const ProductAttributeList = ({ attributes }: ProductAttributeListProps) => {
  if (!attributes) return null;

  return (
    <ul className="product-attr-list">
      {attributes?.map((attr) => {
        return (
          <li className="attr" key={attr.name}>
            <span className="attr-label">{attr.name} : </span>
            <span className="attr-value">{attr.value}</span>
          </li>
        );
      })}
    </ul>
  );
};
