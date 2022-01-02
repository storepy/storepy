import React, { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";

import "./detail-view.scss";
import { IconButton, Icons } from "@miq/components";
import { ProductDetailImages } from "./components";

export default function ProductDetailView(props) {
  const { product } = useContext(SharedDataCtx);

  if (!product) return null;

  return (
    <div>
      <div className="product-detail-view">
        <div className="product-header">
          <h1 className="text-md fw-lighter">{product.name}</h1>
        </div>
        <div className="product-info">
          <div className="text-md fw-bold mt-2 mb-3">15000 CFA</div>
        </div>

        <div className="product-media">
          <ProductDetailImages product={product} />
          {/* <div id="product-detail-images"></div> */}
        </div>
      </div>
    </div>
  );
}
