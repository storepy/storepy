import * as React from 'react';

import './shop.scss';

import {
  CategoryLinks,
  ProductPrice,
  ProductSearchForm,
  ProductType,
  ShopyClientProductDetailSharedDataState,
  ShopyClientProductListSharedDataState,
  Views,
} from '@shopy/shopjs';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { SharedDataCtx } from '@miq/contextjs';
import { Img, View, BreadCrumbs, Pagination } from '@miq/componentjs';
import { ProductAttributeList } from './components';
// import { useViewport } from '@miq/hookjs';

const ShopProductDetailView = () => {
  const ctx = React.useContext(SharedDataCtx);
  // const { isMDDown } = useViewport();

  const { product, similar, breadcrumbs, whatsapp_number } = ctx as ShopyClientProductDetailSharedDataState & {
    whatsapp_number: string | undefined;
  };

  const { is_oos, is_pre_sale, is_pre_sale_text, cover, images } = product;
  const pImages = [cover!, ...images!];

  return (
    <>
      <BreadCrumbs items={breadcrumbs} className="my-3 px-2" />

      <Views.ProductDetailView
        images={
          <div className="p-images mb-2" style={{ position: 'sticky', top: 0 }}>
            <Views.ProductDetailView.HorizontalGallery images={pImages} mobileOnly={false} />
          </div>
        }
        className="product-detail-view"
      >
        <div className="p-details p-1">
          {is_oos && (
            <div className="my-2">
              <span className="bg-red-100 px-1 rounded">En rupture de stock</span>
            </div>
          )}

          <h1 className="p-name fw-lighter mb-1" style={{ fontSize: '1.25rem' }}>
            {product.name}
          </h1>

          <ProductPrice {...product} retail_price={product.retail_price!} />

          <div className="mb-3">{/* <ProductPreSaleDate product={product} /> */}</div>
          {is_pre_sale && is_pre_sale_text && <div className="p-presale-text mb-3">{is_pre_sale_text}</div>}

          {whatsapp_number && (
            <div className="mb-3 text-center">
              <a
                href={`./?r=1&source=site&medium=shopbtn&campaign=web`}
                className="d-block btn btn-md btn-primary px-2 fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acheter
              </a>
            </div>
          )}

          {product.description && <div className="p-description mb-3">{product.description}</div>}

          <ul className="p-extra my-3">
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
          <p className="text-md mb-2">Vous aimerez peut-être</p>

          <Views.ProductGridView.Grid>
            {similar.map((i) => (
              <ProductGridItem item={i} key={i.meta_slug} />
            ))}
          </Views.ProductGridView.Grid>
        </div>
      )}
    </>
  );
};

const ShopProductGridView = () => {
  const [params] = useSearchParams();

  const ctx = React.useContext(SharedDataCtx) as ShopyClientProductListSharedDataState & { pagination: any };

  const { object_list = [], page_label, breadcrumbs, pagination } = ctx;

  const q = params.get('q');

  return (
    <View
      className="p-listview p-1 pb-4"
      header={
        <header className="p-listview-header">
          <div className="miq-container center">
            <div className="mb-3">
              <ProductSearchForm />
            </div>
          </div>

          <BreadCrumbs items={breadcrumbs} className="mb-2" />

          {!q && <CategoryLinks showCover />}
        </header>
      }
    >
      <Views.ProductGridView
        title={page_label}
        viewCN="miq-container-lg"
        items={object_list}
        renderItem={(i) => <ProductGridItem showName item={i} key={i.meta_slug} />}
      />

      <div className="mt-3">{pagination && <Pagination {...pagination} />}</div>
    </View>
  );
};

const ProductGridItem = ({ item, showName, ...props }: { item: ProductType; showName?: boolean }) => {
  const { url, cover, name, is_oos } = item;

  return (
    <a href={`${url}`}>
      <div className="">
        <Img.Picture {...cover} />

        <div className="product-grid-info">
          {is_oos && <span className="bg-red-100 px-1 rounded">En rupture de stock</span>}
          {showName && <div className="product-grid-name">{name}</div>}
          <ProductPrice {...item} />
        </div>
      </div>
    </a>
  );
};

export default function ShopPublicRoutes() {
  return (
    <Routes>
      <Route path=":catMetaSlug/:prodMetaSlug/" element={<ShopProductDetailView />} />
      <Route path=":catMetaSlug/" element={<ShopProductGridView />} />
      <Route index element={<ShopProductGridView />} />
    </Routes>
  );
}
