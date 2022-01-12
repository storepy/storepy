import React, { useContext } from 'react'
import { SharedDataCtx } from '@miq/contexts'
import { Picture, Pagination } from '@miq/components'
import { CategoryLinks, ProductPriceDisplay, SearchForm, BreadCrumbs } from './components'

export const ProductsGrid = ({ items, ...props }) => {
  return (
    <div className="products-grid d-grid grid-2 grid-md-3 grid-lg-4">
      {items?.map((product = {}) => {
        const { cover, name } = product || {}

        const url = product.url
        const slug = product.slug

        return (
          <a href={`${url}`} key={slug}>
            <div className="">
              <Picture {...cover} />
              <div className="product-info">
                <div className="product-name">{name}</div>
                <ProductPriceDisplay product={product} />
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function ProductsPublicView(props) {
  const ctx = useContext(SharedDataCtx)

  if (!ctx.isLoaded) {
    return null
  }

  const { object_list, pagination, page_label } = ctx
  const query = new URLSearchParams(props.location.search)
  const q = query.get('q')

  return (
    <div className="products-view p-1 p-md-3">
      <header>
        <div className="miq-container center">
          <div className="mb-3">
            <SearchForm history={props.history} match={props.match} location={props.location} />
          </div>
        </div>

        <div className="mb-2">
          <BreadCrumbs />
        </div>

        {!q && <CategoryLinks showCover />}

        {page_label && (
          <section className="my-2">
            <h1 aria-label={page_label}>{page_label}</h1>
          </section>
        )}
      </header>

      <div className="my-3">
        {/* <div className="sort-bar">Trier par</div> */}
        <ProductsGrid items={object_list} match={props.match} />
      </div>

      <div className="miq-container center d-flex">
        <div className="mx-auto">
          <Pagination.Links pagination={pagination} />
        </div>
      </div>
    </div>
  )
}
