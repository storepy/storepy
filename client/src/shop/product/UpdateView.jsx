import { useContext, useEffect, useState } from 'react';

import { AdminView } from '@miq/adminjs';
import Form, { useForm } from '@miq/form';
import { getClassName } from '@miq/utils';
import { ToastCtx, Button, Img, ImgDeleteIconButton } from '@miq/components';

import { SupplierData } from '../orders/components';

import { productServices } from './utils';
import { ProductImageAltTextInput, ProductImageUploadButton } from './components';
import { AttributeCreateForm, AttributeUpdateForm } from './Attribute';
import { ProductQuickUpdateForm, ProductForm } from './forms';
import { SHOP_MSGS, SHOP_PATHS } from '../constants';

export const productFormDefaultValues = {
  name: '',
  description: '',
  category: '',
  retail_price: 0.0,
  is_pre_sale: false,
  is_pre_sale_text: '',
  sale_price: 0.0,
  is_on_sale: false,
  //
  title: '',
  slug_public: '',
};

export default function ProductUpdateStaffView(props) {
  const { prodSlug } = props.match.params;

  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('info');
  const toast = useContext(ToastCtx);

  const form = useForm(productFormDefaultValues);
  const { setValues } = form;

  useEffect(() => {
    productServices
      .detail(prodSlug)
      .then((data) => {
        setProduct(data);
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
        });
      })
      .catch((err) => {
        if (err.response) {
          // toast.error({ message: "Something went wrong" });
          console.log(err.response);
          if (err.response.status === 404) {
            return;
          }
        }
      });
  }, [prodSlug, setValues]);

  if (!product) return null;

  const { prev_slug, next_slug } = product;

  return (
    <AdminView
      back={props?.back}
      actions={
        <div>
          {prev_slug && (
            <a href={SHOP_PATHS.productUpdate(prev_slug)} className="btn me-1" title="Voir le produit précédent">
              Previous
            </a>
          )}
          {next_slug && (
            <a href={SHOP_PATHS.productUpdate(next_slug)} className="btn" title="Voir le produit suivant">
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
  );
}

export const ProductPublishButton = ({ product, setProduct, toast, form }) => {
  if (!product?.page) return null;

  const { is_published } = product.page;

  const handlePublish = () => {
    if (is_published)
      return productServices
        .unpublish(product.slug)
        .then((data) => {
          setProduct({ ...product, ...data });
          return toast?.success({ message: SHOP_MSGS.product.unpublish_success });
        })
        .catch((err) => {
          return toast?.error({ message: SHOP_MSGS.default });
        });

    return productServices
      .publish(product.slug)
      .then((data) => {
        setProduct?.({ ...product, ...data });
        return toast?.success({ message: SHOP_MSGS.product.publish_success });
      })
      .catch((err) => {
        const { response = {} } = err;

        if (!response.data) {
          return toast?.error({ message: SHOP_MSGS.default });
        }
        const { retail_price, category, page } = response.data;

        if (retail_price) {
          return toast?.error({ message: SHOP_MSGS.product.publish_error_retail_price });
        }
        if (category) {
          if (form) form.handleError(err);
          return toast?.error({ message: SHOP_MSGS.product.publish_error_category });
        }
        if (page) {
          return toast?.error({ message: SHOP_MSGS.product.publish_error_page });
        }
      });
  };

  return (
    <Button onClick={handlePublish} className={is_published ? 'btn-danger' : 'btn-primary'}>
      {is_published ? 'Unpublish' : 'Publish'} product
    </Button>
  );
};

const ViewTabs = ({ tab, ...props }) => {
  const { prodSlug, product, setProduct, form, toast } = props;

  if (!product.slug) return null;

  switch (tab) {
    case 'inventory':
      return <InventoryViewTab {...props} />;

    case 'imgs':
      return <ImagesViewTab {...props} />;

    case 'setting':
      return <SettingViewTab {...props} />;

    default:
      return (
        <div className="d-grid grid-md-3 gap-3">
          <div className="span-md-2">
            <AdminView.Section title="Description">
              <ProductForm context={form}>
                <Form.TextAreaX
                  required
                  name="description"
                  fields={['description']}
                  error={form.errors.description}
                  placeholder="Give a description to the item"
                />
                <div className="my-2">
                  <Form.Submit value="Save" className="btn btn-primary-2" />
                </div>
              </ProductForm>
            </AdminView.Section>

            <Form
              context={form}
              onSubmit={(e) => {
                e.preventDefault();
                const fD = { title: form.values.title, slug_public: form.values.slug_public };

                return productServices
                  .patchPage(prodSlug, fD, { title: product?.page?.title, slug_public: product?.page?.slug_public })
                  .then((data) => {
                    setProduct({ ...product, ...data });
                    toast.success({ message: SHOP_MSGS.product.page_update_success });
                  })
                  .catch((err) => {
                    form.handleError(err);
                    toast.error({ message: SHOP_MSGS.product.page_update_error });
                  });
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
            </Form>
          </div>

          <AdminView.Section
            title="Status"
            text={
              product.page.is_published
                ? 'This product is published.'
                : 'This product is not published. It does not show in your store.'
            }
            className=""
          >
            <ProductPublishButton product={product} setProduct={setProduct} toast={toast} form={form} />
          </AdminView.Section>
        </div>
      );
  }
};

const InventoryViewTab = (props) => {
  const [addAtr, setAddAtr] = useState(false);
  const { product, setProduct } = props;

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
  );
};

const ImagesViewTab = (props) => {
  const { product, setProduct } = props;

  return (
    <AdminView.Section
      title="Images"
      text="Add images to your product"
      actions={
        <ProductImageUploadButton
          product={product}
          onCreateSuccess={(data) => {
            setProduct({ ...product, ...data });
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
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </AdminView.Section>
  );
};

const SettingViewTab = (props) => {
  const { prodSlug, product, setProduct, form, toast } = props;

  return (
    <div className="">
      <AdminView.Section>
        <Button
          className="btn-danger"
          onClick={() => {
            return productServices
              .delete(prodSlug || product.slug)
              .then((data) => {
                toast?.success({ message: SHOP_MSGS.product.delete_success });
                return props?.onDelete();
              })
              .catch((err) => {
                return toast?.error({ message: SHOP_MSGS.product.delete_error });
              });
          }}
        >
          Delete product
        </Button>
      </AdminView.Section>
    </div>
  );
};
