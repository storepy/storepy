import React, { useContext } from "react";
import { SharedDataCtx } from "@miq/contexts";
import { Picture, Pagination } from "@miq/components";
import { CategoryLinks, ProductPriceDisplay, SearchForm } from "./components";

export const ProductsGrid = ({ items, ...props }) => {
  return (
    <div className="products-grid d-grid grid-2 grid-md-3 grid-lg-4">
      {items?.map((product) => {
        return (
          <a href={`${product.url}`} key={product.slug}>
            <div className="">
              <Picture {...product.cover} />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <ProductPriceDisplay product={product} />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default function ProductsPublicView(props) {
  const ctx = useContext(SharedDataCtx);

  if (!ctx.isLoaded) {
    return null;
  }

  const { object_list, pagination, page_label } = ctx;
  const query = new URLSearchParams(props.location.search);
  const q = query.get("q");

  console.log(q);

  return (
    <div className="products-view p-1 p-md-3">
      <header>
        <div className="miq-container center">
          <SearchForm history={props.history} match={props.match} location={props.location} />
        </div>

        <section className="breadcrumbs mt-3" role={"navigation"} aria-label="breadcrumbs">
          Accueil/bread/crumbs
        </section>

        <section className="my-2">{page_label && <h1 aria-label={page_label}>{page_label}</h1>}</section>
      </header>

      {!q && <CategoryLinks showCover />}

      <div className="my-3">
        <div className="sort-bar">Trier par</div>
        <ProductsGrid items={object_list} match={props.match} />
      </div>

      <div className="my-3">
        <Pagination.PreviousAnchor pagination={pagination} className="btn me-2" />
        <Pagination.NextAnchor pagination={pagination} label="next" className="btn" />
      </div>
    </div>
  );
}
