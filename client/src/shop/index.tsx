import * as React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';

import './shop.scss';

import { SharedDataCtx } from '@miq/contextjs';
import { Img, View, BreadCrumbs, Pagination } from '@miq/componentjs';
import { CategoryLinks, PresaleStarIcon, ProductPrice, ProductSearchForm, ProductType, Views } from '@shopy/shopjs';
import { ShopyClientProductDetailSharedDataState, ShopyClientProductListSharedDataState } from '@shopy/shopjs';

import { truncateStr } from '@miq/utiljs';

const ShopProductDetailView = () => {
  const ctx = React.useContext<ShopyClientProductDetailSharedDataState>(SharedDataCtx);

  const { product, similar, breadcrumbs } = ctx;

  const { cover, images } = product;
  const pImages = [cover!, ...images!];

  return (
    <>
      <Views.ProductDetailView
        product={product}
        header={<BreadCrumbs items={breadcrumbs} className="my-3 px-2" />}
        images={
          <div className="p-images mb-2" style={{ position: 'sticky', top: 0 }}>
            <Views.ProductDetailView.HorizontalGallery images={pImages} mobileOnly={false} />
          </div>
        }
        body={
          <div className="p-details p-1">
            {/* <div className="mb-3">
              <div className="text-md">Porter avec</div>
            </div> */}
          </div>
        }
        footer={
          <>
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
        }
        className="product-detail-view"
      />
    </>
  );
};

const ShopProductGridView = () => {
  const [params] = useSearchParams();
  const ctx = React.useContext<ShopyClientProductListSharedDataState & { pagination: any }>(SharedDataCtx);

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
          {!q || (q && object_list.length === 0) ? <CategoryLinks showCover /> : null}
        </header>
      }
    >
      {q && object_list.length === 0 && (
        <div className="text-center">
          <div className="my-4">
            Votre recherche ne correspond à aucun résultat.
            <p className="text-muted">Veuillez vérifier l'orthographe ou réessayez avec des termes plus généraux.</p>
          </div>
          <div className="my-4">
            <a href="/shop/" className="btn btn-md btn-primary-3 fw-bold">
              Visiter la boutique
            </a>
          </div>
        </div>
      )}
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
      <div>
        <Img.Picture {...cover} className="rounded" style={{ aspectRatio: '4/5', objectFit: 'cover' }} />

        <div className="product-grid-info">
          {is_oos && <span className="bg-red-100 px-1 rounded">En rupture de stock</span>}
          <div className="d-flex justify-content-between align-items-center">
            <ProductPrice {...item} />
            {item.is_pre_sale && <PresaleStarIcon width={16} height={16} />}
          </div>

          {showName && <div className="product-grid-name">{truncateStr(name)}</div>}
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
