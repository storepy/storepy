import ReactDOM from "react-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { SharedDataCtx } from "@miq/contexts";
// import Form, { useForm } from "@miq/form";
import { Img, Picture, SearchTextInput } from "@miq/components";
import { IS_DEV } from "@miq/utils";
import debounce from "lodash.debounce";

export const ProductPriceDisplay = ({ product }) => {
  if (!product || !product.retail_price) return null;

  if (product.is_on_sale) {
    return (
      <div className="product-price-display d-flex align-items-center">
        <div className="text-danger fw-bold me-2">{product.sale_price.amountWithSymbol}</div>
        <div className="text-line-through">{product.retail_price.amountWithSymbol}</div>
      </div>
    );
  }
  return (
    <div className="product-price-display d-flex align-items-center">
      <div className="fw-bold">{product.retail_price.amountWithSymbol}</div>
    </div>
  );
};

export const CategoryLinks = (props) => {
  const ctx = useContext(SharedDataCtx);

  if (!ctx.isLoaded || !ctx.categories) return null;

  // console.log(ctx.categories);

  return (
    <div className="category-links pb-2">
      {ctx.categories?.map((cat) => {
        return (
          <div className="item w-25 w-md-15" key={cat.slug}>
            <a href={cat.url} className="" title={cat.name}>
              {props.showCover && cat?.cover && (
                <Picture {...cat.cover} src_mobile={cat?.cover?.thumb_sq || cat?.cover?.src_mobile} />
              )}
              <div className="info">{cat.name_truncated}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export function SearchForm(props) {
  const { search } = props.location;

  const push = useRef(debounce((url) => props?.history?.push(url), 300));

  const query = new URLSearchParams(search);
  const handleSearch = ({ e }) => {
    const { value } = e.target;

    if (!value || value.length < 3) {
      query.delete("q");
    } else {
      query.set("q", e.target.value);
    }

    if (!push.current) return;

    const path = new URL(window.location.href);
    push.current(`${path.pathname}?${query}`);
  };

  return (
    <form action="/shop/" className="product-search-form">
      <SearchTextInput
        required
        initialValue={query.get("q")}
        onChange={handleSearch}
        className="search-input"
        placeholder={"Cherchez un produit ..."}
        minLength={3}
        maxLength={99}
      />
    </form>
  );
}

export const BreadCrumbs = (props) => {
  const { isLoaded, breadcrumbs } = useContext(SharedDataCtx);

  if (!isLoaded || !breadcrumbs) {
    return null;
  }

  return (
    <section className="miq-breadcrumbs" role={"navigation"} aria-label="breadcrumbs">
      {breadcrumbs.map((item) => {
        return (
          <a href={item.path} className="item" key={item.label} title={item.title} aria-label={item.title}>
            {item.label}
          </a>
        );
      })}
    </section>
  );
};

//
// NOT USED
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
