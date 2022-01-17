import { useContext, useEffect, useState } from 'react';

import { AdminView, PublishedStatusSpan } from '@miq/adminjs';
import Form, { useForm } from '@miq/form';
import { ToastCtx } from '@miq/components';
import { ImgSquare, Button, Pagination } from '@miq/components';
import { addOrUpdateArrayObject } from '@miq/utils';

import { supOrderServices } from './utils';
import { SupplierProductAddForm } from './forms';
import { ProductForm } from '../product/forms';
import { SupplierData } from './components';
import { SHOP_MSGS, SHOP_PATHS } from '../constants';
import { productServices } from '../product/utils';
import { ProductPriceDisplay } from '../public/components';
import { Loading } from 'src/exports';
import { StaffProductDeleteButton } from '../product/components';

const formDefault = {
  order_id: '',
  items_stage: '',
  currency: '',
  is_paid: false,
  total_cost: '',
};

export default function SupplierOrderStaffUpdateView(props) {
  const { sOrderSlug } = props.match.params;

  const [order, setOrder] = useState({});
  const [products, setProducts] = useState({});

  const toast = useContext(ToastCtx);

  const form = useForm(formDefault);
  const { setValues } = form;

  useEffect(() => {
    if (!sOrderSlug) return;
    return supOrderServices
      .detail(sOrderSlug)
      .then((data) => {
        setOrder(data);

        setValues({
          order_id: data.order_id || '',
          items_stage: data.items_stage || '',
          currency: data.currency || '',
          is_paid: data.is_paid || false,
          total_cost: data.total_cost || '',
        });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            return;
          }
        }
      });
  }, [sOrderSlug, setValues]);

  useEffect(() => {
    if (!sOrderSlug) return;

    return productServices
      .list({ supplier_order_slug: sOrderSlug })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [sOrderSlug]);

  if (!sOrderSlug || !order) return null;

  const handleSubmit = (e, fields) => {
    e.preventDefault();

    let fD = {};
    if (Array.isArray(fields)) {
      fields.forEach((field) => {
        const val = form.values[field];
        if (val == null) return;
        fD[field] = val;
      });
    } else fD = { ...form.values };

    supOrderServices
      .patch(sOrderSlug, fD)
      .then(() => {
        toast.success({ message: SHOP_MSGS.order.update_success });
      })
      .catch((err) => {
        toast.error({ message: SHOP_MSGS.order.update_error });
        form.handleError(err);
      });
  };

  const removeItem = (slug) =>
    setProducts({ ...products, count: products.count - 1, results: products.results.filter((i) => i.slug !== slug) });

  return (
    <AdminView
      back={SHOP_PATHS.orderList()}
      title="Modifier une commande"
      actions={<div></div>}
      className="supplier-order-update-view"
    >
      <div className="d-grid grid-md-3 gap-3">
        <div className="span-md-2">
          <SupplierProductAddForm
            order_slug={sOrderSlug}
            onSuccess={(product) => {
              toast.success({ message: SHOP_MSGS.product.create_success });
              return setProducts({
                ...products,
                count: products.count + 1,
                results: addOrUpdateArrayObject(products.results, product),
              });
            }}
          />

          <OrderItemListSection
            {...props}
            order={order}
            products={products}
            setProducts={setProducts}
            removeItem={removeItem}
            orderSlug={order.slug}
          />
        </div>

        <div className="">
          <div className="" style={{ position: 'sticky', top: 0 }}>
            <Form context={form} onSubmit={handleSubmit} className="order-update-form">
              <AdminView.Section title="Order details">
                <ul className="mb-3">
                  <li className="">Product: {products.count}</li>
                </ul>
                <div className="mb-1">
                  <Form.Label value="Order Id" className="mb-1" />
                  <Form.TextInput
                    required
                    name="order_id"
                    error={form.errors.order_id}
                    placeholder="Order iD"
                    maxLength={99}
                  />
                </div>
                <div className="d-flex align-items-center mb-1">
                  <Form.CheckboxInput name="is_paid" error={form.errors.is_paid} className="me-2" />
                  <Form.Label value="Paid" />
                </div>
                {form.values.is_paid && (
                  <div className="mb-1">
                    <Form.Label value="Total cost" id="total_cost_label" />
                    <Form.TextInput
                      required
                      type="number"
                      name="retailtotal_cost_price"
                      error={form.errors.total_cost}
                      aria-describedby="total_cost_label"
                      min="0"
                      step="0.01"
                    />
                  </div>
                )}
                <div className="">
                  <Form.Submit value="Save" className="btn btn-primary-3" />
                </div>
              </AdminView.Section>
            </Form>

            <Form context={form} onSubmit={(e) => handleSubmit(e, ['items_stage'])} className="order-update-form">
              <AdminView.Section title="Stage" text="This will update the stage of all products in this order.">
                <ProductForm.StageSelect
                  name="items_stage"
                  stages={order?.stages}
                  error={form.errors.items_stage}
                  showLabel={false}
                  className="mb-1"
                />

                <div className="">
                  <Form.Submit value="Save" className="btn btn-primary-2" />
                </div>
              </AdminView.Section>
            </Form>
          </div>
        </div>
      </div>
    </AdminView>
  );
}

const OrderItemListSection = (props) => {
  const [selected, setSelected] = useState([]);

  const { toast, order, products, setProducts } = props;

  return (
    <AdminView.Section className="order-items mb-3">
      {products?.results?.map((item) => {
        const isSelected = selected.includes(item.slug);

        return (
          <div className="" key={item.slug}>
            <div className="">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => {
                  if (isSelected) setSelected(selected.filter((i) => i !== item.slug));
                  else setSelected([...selected, item.slug]);
                }}
              />
            </div>

            <OrderItem
              {...props}
              item={item}
              toast={toast}
              categories={order.categories}
              onUpdate={(data) => {
                setProducts({
                  ...products,
                  results: products.results.map((i) => {
                    if (i.slug === data.slug) return data;
                    return i;
                  }),
                });
              }}
            />
          </div>
        );
      })}
      <Pagination
        count={products.count}
        next={products.next}
        previous={products.previous}
        onPreviousClick={() => {
          productServices
            .get(products.previous)
            .then((data) => {
              setProducts(data);
            })
            .catch((err) => {
              toast?.error({ message: SHOP_MSGS.default });
            });
        }}
        onNextClick={() => {
          productServices
            .get(products.next)
            .then((data) => {
              setProducts(data);
            })
            .catch((err) => {
              toast?.error({ message: SHOP_MSGS.default });
            });
        }}
      />
    </AdminView.Section>
  );
};

const OrderItem = ({ item, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const form = useForm({
    name: item.name || '',
    category: item.category || '',
    retail_price: item?.retail_price || 0.0,
    supplier_item_cost: item?.supplier_item_cost || 0.0,
    is_pre_sale: item.is_pre_sale || false,
    is_pre_sale_text: item.is_pre_sale_text || '',
  });

  if (!item?.slug) return null;

  const handleUpdate = (data) => {
    setLoading(false);
    return props?.onUpdate(data);
  };

  const { errors } = form;
  return (
    <div className="order-item mb-2 border-1 rounded p-1">
      {error && <div className="text-danger">Something went wrong.</div>}

      <div className="d-grid grid-md-3 gap-2">
        <ProductForm
          context={form}
          prodSlug={item.slug}
          fields={['name', 'category', 'retail_price', 'is_pre_sale', 'is_pre_sale_text', 'supplier_item_cost']}
          className="order-item-form span-md-2 d-grid grid-md-3 gap-1"
          onWillSubmit={() => setLoading(true)}
          onSuccess={handleUpdate}
          onError={(err) => {
            setLoading(false);
            return form.handleError(err);
          }}
        >
          <div className="span-md-3 d-flex align-items-center">
            <ImgSquare {...item.cover_data} className="rounded" />
            <ProductForm.NameInput error={errors.name} className="ms-1" />
          </div>

          <div className="">
            <ProductForm.CategoryInput categories={props?.categories} error={errors.category} />
          </div>
          <div className="">
            <ProductForm.RetailPriceInput error={errors.retail_price} />
          </div>
          <div className="">
            <Form.TextInput
              type="number"
              name="supplier_item_cost"
              error={errors.supplier_item_cost}
              min="0"
              step="0.01"
            />
          </div>

          <div className="span-md-3">
            <div className="mb-1">
              <ProductForm.PresaleCheckboxInput error={errors.is_pre_sale} />
            </div>

            {form.values.is_pre_sale && (
              <div className="mb-1">
                <ProductForm.PresaleTextInput error={errors.is_pre_sale_text} />
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center">
              <StaffProductDeleteButton
                prodSlug={item.slug}
                onSuccess={() => {
                  props?.removeItem?.(item.slug);
                }}
                onError={() => setError(true)}
                className="btn-danger-3"
                label="Supprimer"
              />
              <Form.Submit value="Sauveguarder" className="submit-btn btn btn-primary min-w-35" />
            </div>
          </div>
        </ProductForm>

        <div className="">
          <div className="d-flex align-items-center justify-content-between">
            <div title="Add to cart count">atc: {item.add_to_cart_count}</div>
            <div style={{ minWidth: 23, minHeight: 23 }}>
              {loading ? (
                <Loading className="icon small" />
              ) : (
                <PublishedStatusSpan is_published={item?.page?.is_published} pill short />
              )}
            </div>
          </div>

          <SupplierData product={item} />

          <a
            href={SHOP_PATHS.productUpdate(item.slug)}
            target="_blank"
            className="update-btn btn btn-primary-3 w-100 d-block text-center"
          >
            Go to update page »
          </a>
        </div>
      </div>
    </div>
  );
};
