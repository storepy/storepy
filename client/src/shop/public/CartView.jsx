import React, { useContext } from 'react'
import { SharedDataCtx } from '@miq/contexts'
import { Picture, Pagination } from '@miq/components'
import { CategoryLinks, ProductPriceDisplay, SearchForm, BreadCrumbs } from './components'

export default function CartPublicView(props) {
  const ctx = useContext(SharedDataCtx)

  if (!ctx.isLoaded) {
    return null
  }

  const { cart } = ctx

  console.log(cart)

  return (
    <div className="cart-view d-grid grid-md-3 gap-3 p-1 p-md-3">
      <div className="cart-items span-md-2">
        {cart?.items?.map((item) => {
          return (
            <div className="cart-item d-grid grid-4 gap-2" key={item.slug}>
              <a href={item.url} className="d-block">
                <Picture {...item.cover} />
              </a>

              <div className="span-3">
                <a href={item.url} className="item-title d-block fw-bold">
                  {item.name}
                </a>

                {item.size && <div className="size">{item.size}</div>}

                <ProductPriceDisplay product={item} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="cart-summary">
        <div className="sticky" style={{ top: 0, position: 'sticky' }}>
          <div className="text-md">Résumé de votre panier</div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="subtotal-label">Sous-total:</span>
            <span className="subtotal-amount">{cart.subtotal.amountWithSymbol}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
