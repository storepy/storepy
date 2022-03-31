import * as React from 'react';

import './shop.scss';

import {
  CategoryLinks,
  ProductGrid,
  ProductImagesHorizontalGallery,
  ProductSearchForm,
  ShopyClientProductDetailSharedDataState,
  ShopyClientProductListSharedDataState,
  Views,
} from '@shopy/shopjs';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { SharedDataCtx } from '@miq/contextjs';
import { Img, View, BreadCrumbs } from '@miq/componentjs';
import { ProductAttributeList, ProductPrice } from './components';

const ProductDetailView = () => {
  const ctx = React.useContext(SharedDataCtx);
  const { product, similar, breadcrumbs } = ctx as ShopyClientProductDetailSharedDataState;

  const { is_pre_sale, is_pre_sale_text } = product;

  return (
    <>
      <BreadCrumbs items={breadcrumbs} className="my-3 px-2" />

      <Views.ProductDetailView
        images={
          <div className="p-images mb-2" style={{ position: 'sticky', top: 0 }}>
            <ProductImagesHorizontalGallery images={product?.images || []} mobileOnly={false} />
          </div>
        }
        className="product-detail-view"
      >
        <div className="p-details p-1">
          <h1 className="p-name text-md fw-lighter">{product.name}</h1>
          <ProductPrice {...product} retail_price={product.retail_price!} />

          <div className="mb-3">{/* <ProductPreSaleDate product={product} /> */}</div>
          {is_pre_sale && is_pre_sale_text && <div className="p-presale-text mb-3">{is_pre_sale_text}</div>}

          <div className="mb-3">
            {/* CART FORMS */}
            {/* {cartHasProd ? <CartItemUpdateForm {...cartProps} /> : <AddToCartForm {...cartProps} />} */}
          </div>

          {product.description && <div className="p-description mb-3">{product.description}</div>}

          <ul className="p-extra mb-3">
            {product?.has_attributes && (
              <>
                <li className="p-extra-title mb-1">Détails</li>
                <li className="p-extra-content">
                  <ProductAttributeList attributes={product.attributes || []} />
                </li>
              </>
            )}

            <li className="p-extra-title mb-1">Livraison</li>
            <li className="p-extra-content">
              <p className="mb-2">
                Livraison standard gratuite sur Cotonou pour les commandes de 50000 CFA et plus.
                <br />
                Le délai de traitement de la livraison standard pour cet article est estimé à 1 à 5 jours ouvrables.
              </p>
              {/* <a href="." className="text-underline">
                  Consultez notre page Livraison
                </a> */}
            </li>
          </ul>

          {/* <div className="mb-3">
              <div className="text-md">Porter avec</div>
            </div> */}
        </div>
      </Views.ProductDetailView>

      {similar && (
        <div className="p-2">
          <p className="text-md mb-2">Voir les styles semblables</p>
          <ProductGrid>
            {similar.map((i) => (
              <ProductGridItem item={i} key={i.meta_slug} />
            ))}
          </ProductGrid>
        </div>
      )}
    </>
  );
};

type ProductGridSharedData = ShopyClientProductListSharedDataState & {};

const ProductGridView = () => {
  const [params] = useSearchParams();
  const ctx = React.useContext(SharedDataCtx);
  const { object_list = [], page_label, breadcrumbs }: ProductGridSharedData = ctx as ProductGridSharedData;

  const q = params.get('q');
  const page = params.get('page');

  return (
    <View
      className="p-listview"
      header={
        <header className="p-listview-header">
          <div className="miq-container center">
            <div className="mb-3">
              <ProductSearchForm />
            </div>
          </div>

          <BreadCrumbs items={breadcrumbs} className="mb-2" />

          {!q && !page && <CategoryLinks showCover />}
        </header>
      }
    >
      <Views.ProductGridView
        title={page_label}
        viewCN="miq-container-lg"
        items={object_list}
        renderItem={(i) => <ProductGridItem item={i} key={i.meta_slug} />}
      />
      {/* <Pagination {...pagination} /> */}
    </View>
  );
};

const ProductGridItem = (props: any) => {
  const { url, cover, name } = props.item;
  return (
    <a href={`${url}`}>
      <div className="">
        <Img.Picture {...cover} />

        <div className="product-grid-info">
          {/* {showName &&  */}
          <div className="product-grid-name">{name}</div>
          {/* } */}
          {/* <ProductPrice instance={product} /> */}
        </div>
      </div>
    </a>
  );
};

export default function ShopPublicRoutes() {
  return (
    <Routes>
      <Route path=":catMetaSlug/:prodMetaSlug/" element={<ProductDetailView />} />
      <Route path=":catMetaSlug/" element={<ProductGridView />} />
      <Route index element={<ProductGridView />} />
    </Routes>
  );
}
