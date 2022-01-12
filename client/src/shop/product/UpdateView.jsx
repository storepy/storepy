import { useContext, useEffect, useState } from 'react'

import { AdminView, StaffCoverUpdateForm, PublishedStatusSpan } from '@miq/adminjs'
import Form, { useForm } from '@miq/form'
import { getClassName } from '@miq/utils'
import { ToastCtx, Button, Img, ImgDeleteIconButton } from '@miq/components'

import { productServices } from './utils'
import { ProductImageAltTextInput, ProductUpdateForm, ProductImageUploadButton, SupplierData } from './components'
import { AttributeCreateForm, AttributeUpdateForm } from './Attribute'

const ViewTabs = ({ tab, ...props }) => {
  const { prodSlug, product, setProduct, form, toast } = props
  const [addAtr, setAddAtr] = useState(false)

  if (!product.slug) return null

  switch (tab) {
    case 'inventory':
      return (
        <div className="d-flex flex-column flex-md-row">
          <div className="flex-1">
            <AdminView.Section title="Sizes" text="Add sizes"></AdminView.Section>
            <AdminView.Section
              title="Attributes"
              actions={
                <Button onClick={() => setAddAtr(!addAtr)} className="btn-primary-3">
                  Ajouter attribut
                </Button>
              }
            >
              {addAtr && (
                <div className="border-bottom mb-2 pb-3">
                  <p className="text-center mb-3">Ajouter un attribut au produit.</p>
                  <AttributeCreateForm
                    product={product}
                    onSuccess={(productData) => setProduct({ ...product, ...productData })}
                  />
                </div>
              )}

              <div className="my-3">
                {product.attributes.map((attr) => (
                  <div className="mb-1" key={attr.slug}>
                    <AttributeUpdateForm
                      instance={attr}
                      product={product}
                      onSuccess={(pData) => setProduct({ ...product, ...pData })}
                    />
                  </div>
                ))}
              </div>
            </AdminView.Section>
          </div>

          <div className="w-md-35 ms-md-2">
            <SupplierData product={product} />
          </div>
        </div>
      )

    case 'imgs':
      return (
        <AdminView.Section
          title="Images"
          text="Add images to your product"
          actions={
            <ProductImageUploadButton
              product={product}
              onCreateSuccess={(data) => {
                setProduct({ ...product, ...data })
              }}
            />
          }
        >
          <div className="d-grid grid-md-3 grid-lg-4" style={{ gap: 4 }}>
            {product.images_data.map((img) => (
              <div className="mb-1" key={img.slug}>
                <Img {...img} className="product-img" />

                <div className="d-flex">
                  <ProductImageAltTextInput image={img} />
                  <ImgDeleteIconButton
                    slug={img.slug}
                    label=""
                    className="btn-danger-3 ms-1"
                    onSuccess={() => {
                      setProduct({
                        ...product,
                        images_data: product.images_data.filter((i) => i.slug !== img.slug),
                        images: product.images.filter((i) => i !== img.slug),
                      })
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AdminView.Section>
      )

    case 'setting':
      return (
        <Form
          context={form}
          onSubmit={(e) => {
            e.preventDefault()
            const fD = { title: form.values.title, slug_public: form.values.slug_public }

            return productServices
              .patchPage(prodSlug, fD, { title: product?.page?.title, slug_public: product?.page?.slug_public })
              .then((data) => {
                setProduct({ ...product, ...data })
                toast.success({ message: 'Product page updated.' })
              })
              .catch((err) => {
                form.handleError(err)
                toast.error({ message: 'Could not update.' })
              })
          }}
        >
          <AdminView.Section title="Seo">
            <div className="mb-1">
              <Form.Label value="Meta title" className="mb-1" />
              <Form.TextInput
                required
                name="title"
                error={form.errors.title}
                placeholder="Give a name to the item"
                maxLength={99}
              />
            </div>
            <div className="mb-1">
              <Form.Label value="Slug" className="mb-1" />
              <Form.TextInput
                required
                name="slug_public"
                error={form.errors.slug_public}
                placeholder={'Write slug ...'}
                maxLength={99}
              />
            </div>

            <div className="my-2">
              <Form.Submit value="Update" className="btn btn-primary-3" />
            </div>
          </AdminView.Section>

          <AdminView.Section>
            <Button
              className="btn-danger"
              onClick={() => {
                return productServices
                  .delete(prodSlug || product.slug)
                  .then((data) => {
                    return props?.onDelete()
                  })
                  .catch((err) => {
                    toast?.error({ message: 'Something went wrong' })
                  })
              }}
            >
              Delete product
            </Button>
          </AdminView.Section>
        </Form>
      )

    default:
      return (
        <div className="d-grid grid-md-3 gap-3">
          <AdminView.Section title="Description" className="span-md-2">
            <ProductUpdateForm form={form}>
              <Form.TextAreaX
                name="description"
                onSave={({ name, value }) =>
                  productServices
                    .patch(product.slug, { [name]: value }, { [name]: product[name] })
                    .then((data) => {
                      setProduct({ ...product, ...data })
                      toast.success({ message: 'Product updated.' })
                    })
                    .catch((err) => {
                      form.handleError(err)
                      toast.error({ message: 'Could not update item.' })
                    })
                }
                error={form.errors.description}
                placeholder="Give a description to the item"
              />
            </ProductUpdateForm>
          </AdminView.Section>

          <AdminView.Section
            title="Status"
            text={
              product.page.is_published
                ? 'This item is published.'
                : 'This item is not published. It does not show in your store.'
            }
            className=""
          >
            <ProductPublishButton product={product} setProduct={setProduct} toast={toast} />
          </AdminView.Section>
        </div>
      )
  }
}

export const productFormDefaultValues = {
  name: '',
  description: '',
  title: '',
  category: '',
  slug_public: '',
  retail_price: 0.0,
  is_pre_sale: false,
  is_pre_sale_text: '',
  sale_price: 0.0,
  is_on_sale: false,
}

export const ProductQuickUpdateForm = ({ form, product, ...props }) => {
  const { setProduct, toast, categories } = props
  const productSlug = product?.slug

  useEffect(() => {}, [productSlug])

  const handleSubmit = (e) => {
    e.preventDefault()
    const fD = {
      retail_price: form.values.retail_price,
      is_on_sale: form.values.is_on_sale,
    }

    if (form.values.category) fD.category = form.values.category
    if (form.values.is_on_sale) fD.sale_price = form.values.sale_price

    if (form.values.is_pre_sale) {
      fD.is_pre_sale = form.values.is_pre_sale
      fD.is_pre_sale_text = form.values.is_pre_sale_text
    }

    return productServices
      .patch(product.slug, fD)
      .then((data) => {
        setProduct?.({ ...product, ...data })
        toast?.success({ message: 'Product updated.' })
      })
      .catch((err) => {
        toast?.error({ message: 'Could not update product.' })
        return form.handleError(err)
      })
  }

  return (
    <Form context={form} onSubmit={handleSubmit}>
      <div className="d-grid grid-md-3 gap-3">
        <div className="span-md-2">
          <AdminView.Section
            title="Details"
            actions={<PublishedStatusSpan is_published={product?.page?.is_published} pill />}
          >
            <div className="mb-1">
              <ProductUpdateForm.NameInput
                product={product}
                form={form}
                onSuccess={(data) => {
                  setProduct?.({ ...product, ...data })
                  toast?.success({ message: 'Item updated.' })
                }}
                onError={(err) => {
                  form.handleError(err)
                  toast?.error({ message: 'Could not update item.' })
                }}
              />
            </div>

            {categories && (
              <div className="mb-1">
                <Form.Label value="Category" />
                <Form.SelectInput required name="category" nullValue={{ label: 'Select category' }}>
                  {categories?.items?.map((cat) => {
                    return <Form.SelectInput.Option {...cat} key={cat.value} />
                  })}
                </Form.SelectInput>
              </div>
            )}

            <div className="mb-1">
              <div className="mb-1">
                <Form.Label value="Retail price" id="retail_price_label" />
                <Form.TextInput
                  required
                  type="number"
                  name="retail_price"
                  error={form.errors.retail_price}
                  aria-describedby="retail_price_label"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* PRE SALE */}
              <div className="mb-1">
                <div className="d-flex align-items-center mb-1">
                  <Form.CheckboxInput name="is_pre_sale" error={form.errors.is_pre_sale} className="me-2" />
                  <Form.Label value="Pre-sale" />
                </div>

                {form.values.is_pre_sale && (
                  <div className="mb-2">
                    <Form.Label value="Pre sale text" id="is_pre_sale_text_label" className="miq-checkbox-label" />
                    <Form.TextAreaX
                      name="is_pre_sale_text"
                      error={form.errors.is_pre_sale_text}
                      aria-describedby="is_pre_sale_text_label"
                    />
                  </div>
                )}
              </div>

              {/* SALE  */}
              <div className="d-flex align-items-center mb-1">
                <Form.CheckboxInput name="is_on_sale" error={form.errors.is_on_sale} className="me-2" />
                <Form.Label value="On Sale" />
              </div>

              {form.values.is_on_sale && (
                <div className="mb-2">
                  <Form.Label value="Sale price" id="sale_price_label" className="miq-checkbox-label" />
                  <Form.TextInput
                    required
                    type="number"
                    name="sale_price"
                    error={form.errors.sale_price}
                    aria-describedby="sale_price_label"
                    min="0"
                    step="0.01"
                  />
                </div>
              )}
            </div>

            <div className="my-3">
              <Form.Submit value="Update product" className="btn btn-primary-3" />
            </div>
          </AdminView.Section>
        </div>

        <div className="">
          <StaffCoverUpdateForm
            slug={product?.cover}
            data={product.cover_data}
            onCreate={(imgData) => {
              productServices
                .patch(product.slug, { cover: imgData.slug })
                .then((data) => {
                  setProduct?.({ ...product, ...data })
                  toast?.success({ message: 'Product cover updated.' })
                })
                .catch((err) => {
                  toast?.error({ message: 'Could not upload cover image.' })
                })
            }}
            onUpdate={(cover_data) => {
              toast?.success({ message: 'Product cover updated.' })
              return setProduct?.({ ...product, cover_data })
            }}
            onDelete={() => {
              return setProduct?.({ ...product, cover_data: null, cover: null })
            }}
            className="mb-1"
          />
          <ProductImageAltTextInput image={product?.cover_data} />
        </div>
      </div>
    </Form>
  )
}

export default function ProductUpdateView(props) {
  const { prodSlug } = props.match.params

  const [product, setProduct] = useState(null)
  const [tab, setTab] = useState('info')
  const toast = useContext(ToastCtx)

  const form = useForm(productFormDefaultValues)
  const { setValues } = form

  useEffect(() => {
    productServices
      .detail(prodSlug)
      .then((data) => {
        setProduct(data)
        setValues({
          name: data.name || '',
          description: data.description || '',
          category: data.category || '',
          retail_price: data?.retail_price || 0.0,
          // PRESALE
          is_pre_sale: data.is_pre_sale || false,
          is_pre_sale_text: data.is_pre_sale_text || '',
          // SALE
          is_on_sale: data.is_on_sale || false,
          sale_price: data?.sale_price || 0.0,
          // SEO
          title: data.page.title || '',
          slug_public: data?.page?.slug_public || '',
        })
      })
      .catch((err) => {
        if (err.response) {
          // toast.error({ message: "Something went wrong" });
          console.log(err.response)
          if (err.response.status === 404) {
            return
          }
        }
      })
  }, [prodSlug, setValues])

  if (!product) return null

  // console.log(product);

  return (
    <AdminView
      back={props?.back}
      actions={
        <div>
          {product?.prev_slug && (
            <a href={`${props?.back}${product?.prev_slug}/`} className="btn me-1" title="Voir le produit précédent">
              Previous
            </a>
          )}
          {product?.next_slug && (
            <a href={`${props?.back}${product?.next_slug}/`} className="btn" title="Voir le produit suivant">
              Next
            </a>
          )}
        </div>
      }
      className="product-update-view"
    >
      <ProductQuickUpdateForm
        form={form}
        product={product}
        categories={product?.categories}
        setProduct={setProduct}
        toast={toast}
      />

      <div className="my-2">
        <div className="d-flex justify-content-center mb-3">
          <div className="d-flex align-items-center">
            <Button
              onClick={() => setTab('info')}
              className={getClassName(['me-1', tab === 'info' && 'btn-primary-3'])}
            >
              Info
            </Button>
            <Button
              onClick={() => setTab('inventory')}
              className={getClassName(['me-1', tab === 'inventory' && 'btn-primary-3'])}
            >
              Inventory
            </Button>
            <Button
              onClick={() => setTab('imgs')}
              className={getClassName(['me-1', tab === 'imgs' && 'btn-primary-3'])}
            >
              Images
            </Button>
            <Button onClick={() => setTab('setting')} className={getClassName([tab === 'setting' && 'btn-primary-3'])}>
              Settings
            </Button>
          </div>
        </div>
        <ViewTabs
          tab={tab}
          prodSlug={prodSlug}
          product={product}
          setProduct={setProduct}
          form={form}
          toast={toast}
          onDelete={() => props?.history?.push(props.back)}
        />
      </div>
    </AdminView>
  )
}

const ERRMSG = {
  retail_price: 'You can not publish a product without price',
  category: 'You can not publish a product without category',
  page: 'You can not publish a product without page',
  default: 'Something went awfully wrong!',
}

export const ProductPublishButton = ({ product, setProduct, toast }) => {
  if (!product?.page) return null

  const { is_published } = product.page

  const handlePublish = () => {
    if (is_published)
      return productServices
        .unpublish(product.slug)
        .then((data) => {
          setProduct({ ...product, ...data })
          return toast?.success({ message: 'Item unpublished' })
        })
        .catch((err) => {
          return toast?.error({ message: ERRMSG.default })
        })

    return productServices
      .publish(product.slug)
      .then((data) => {
        setProduct?.({ ...product, ...data })
        return toast?.success({ message: 'Item published' })
      })
      .catch(({ response = {} }) => {
        if (!response.data) {
          return toast?.error({ message: ERRMSG.default })
        }
        const { retail_price, category, page } = response.data

        if (retail_price) {
          return toast?.error({ message: ERRMSG.retail_price })
        }
        if (category) {
          return toast?.error({ message: ERRMSG.category })
        }
        if (page) {
          return toast?.error({ message: ERRMSG.page })
        }
        // console.log(response.data);
      })
  }
  return (
    <Button onClick={handlePublish} className={is_published ? 'btn-danger' : 'btn-primary'}>
      {is_published ? 'Unpublish' : 'Publish'} product
    </Button>
  )
}
