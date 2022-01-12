import React from 'react'

import { useCallback, useContext, useEffect, useState } from 'react'
import { addForwardSlash } from '@miq/utils'

// import { SharedDataCtx } from "@miq/contexts";
import { useForm } from '@miq/form'
import { AdminView } from '@miq/adminjs'
import { Button, ToastCtx, ImgSquare, Img } from '@miq/components'
import { ProductCoverUploadButton, ProductUpdateForm } from './components'
import { productServices } from './utils'

const ProductTabDisplay = (props) => {
  const { product, form, tab, onProductUpdate } = props

  switch (tab) {
    case 'price':
      return <AdminView.Section title={form.values.name} text="Upload your item's price"></AdminView.Section>

    case 'imgs':
      const { cover_data, cover } = product
      return <AdminView.Section title={form.values.name} className="product-item-images"></AdminView.Section>

    case 'desc':
      return (
        <AdminView.Section title={form.values.name} text="Update your item's description">
          {product.description}
        </AdminView.Section>
      )

    default:
      return (
        <AdminView.Section title={form.values.name} text={`/${product.page.slug_public}`}>
          <div className="d-flex">
            <div className="me-1">
              <ProductCoverUploadButton
                product={product}
                onCreateSuccess={(data) => {
                  onProductUpdate(data)
                }}
                onCreateError={() => {}}
                onUpdateSuccess={(imgData) => {
                  onProductUpdate({ ...product, cover: imgData.slug, cover_data: imgData })
                }}
                onUpdateError={() => {}}
              >
                <ImgSquare {...product.cover_data} className="product-cover" />
              </ProductCoverUploadButton>
            </div>
            <div className="flex-1">
              <ProductUpdateForm.NameInput
                product={product}
                form={form}
                onSuccess={(data) => {
                  // setProduct(data);
                  // toast.success({ message: "Item updated." });
                }}
                onError={(err) => {
                  form.handleError(err)
                  // toast.error({ message: "Could not update item." });
                }}
              />
            </div>
          </div>
        </AdminView.Section>
      )
  }
}

const ProductItem = ({ product, ...props }) => {
  const [tab, setTab] = useState('product')
  const form = useForm({
    name: product.name || '',
    description: product.description || '',
    slug_public: product?.page.slug_public || '',
    is_published: product.page.is_published || false,
    title: '',
  })

  if (!product || !product.slug) return null

  return (
    <div className="product-item border-1 rounded">
      <ProductUpdateForm form={form} product={product}>
        <div className="d-flex align-items-center justify-content-between p-1 border-bottom">
          <div className="product-item-nav">
            <Button onClick={() => setTab('product')}>Info</Button>
            <Button onClick={() => setTab('desc')}>Description</Button>
            <Button onClick={() => setTab('price')}>Price</Button>
            <Button onClick={() => setTab('imgs')}>Images</Button>
          </div>

          <div className="">
            <AdminNavLink
              to={addForwardSlash(`${props?.match?.path}${product.slug}`)}
              label="Update"
              requiredPerms={['shop.change_product']}
              className="btn-primary-3"
            />
          </div>
        </div>

        <div className="p-1">
          <ProductTabDisplay {...props} product={product} tab={tab} form={form} />
        </div>
      </ProductUpdateForm>
    </div>
  )
}

export default function ProductListView(props) {
  const [data, setData] = useState({ results: [] })
  const toasts = useContext(ToastCtx)

  const getProducts = useCallback((...params) => productServices.list(...params), [])
  //   const push = useRef(debounce((url) => props.history.push(url), 300));

  useEffect(() => {
    getProducts(params)
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        toasts.error({ message: 'Something went wrong' })
      })
  }, [getProducts, search, toasts])

  const handleProductUpdate = (prodData) => {
    setData({
      ...data,
      results: data.results.map((i) => {
        if (i.slug === prodData.slug) return prodData
        return i
      }),
    })
  }

  return (
    <AdminView back={props?.back} title="Products">
      <div className="product-list">
        {data?.results?.map((item) => (
          <ProductItem
            product={item}
            match={props.match}
            setData={setData}
            toasts={toasts}
            onProductUpdate={handleProductUpdate}
            key={item.slug}
          />
        ))}
      </div>
    </AdminView>
  )
}
