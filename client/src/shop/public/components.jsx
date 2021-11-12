import ReactDOM from "react-dom";

import { Img } from "@miq/components";
import { IS_DEV } from "@miq/utils";
import { useEffect, useState } from "react";

export const ProductDetailImages = ({ product, ...props }) => {
  const { images = [], cover } = product;
  const [active, setActive] = useState(cover);

  const [root, setRoot] = useState(null);

  useEffect(() => {
    if (IS_DEV) return;

    const el = document.getElementById("product-detail-images");
    if (el) setRoot(el);
  }, [setRoot]);

  if (!product) return null;

  const render = (
    <div className="product-images d-flex flex-column-reverse flex-sm-row">
      <div className="thumbnails d-flex flex-row flex-sm-column me-1">
        <Img src={cover.thumb} className="mb-1" onClick={() => setActive(cover)} />

        {images.map((img) => (
          <Img src={img.thumb} onClick={() => setActive(img)} className="mb-1" key={img.src} />
        ))}
      </div>

      <div className="">
        <Img src={active.src} />
      </div>
    </div>
  );

  return IS_DEV ? render : root ? ReactDOM.createPortal(render, root) : null;
};
