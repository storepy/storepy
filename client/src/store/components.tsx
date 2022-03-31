import * as React from 'react';

import './components.scss';

import { getClassName as getCN } from '@miq/utiljs';
import { AttributeType } from '@shopy/shopjs';

export type PriceDataType = { currency: string; amount: string; amountWithSymbol: string };
type ProductPriceProps = {
  retail_price: PriceDataType;
  sale_price?: PriceDataType;
  is_on_sale?: boolean;
};

export const ProductPrice: React.FC<ProductPriceProps> = (props) => {
  const { is_on_sale, retail_price, sale_price } = props;
  const isSale = is_on_sale && sale_price?.amountWithSymbol != null;

  return (
    <div className={getCN(['p-price', isSale && 'sale'])}>
      {isSale && <div className="p-price-sale">{sale_price.amountWithSymbol}</div>}
      <div className="p-price-retail">{retail_price.amountWithSymbol}</div>
    </div>
  );
};

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
