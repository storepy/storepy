import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AdminView, PublishedStatusSpan } from '@miq/adminjs';
import Form, { useForm } from '@miq/form';
import { ToastCtx } from '@miq/components';
import { addForwardSlash } from '@miq/utils';
import { Table, ItemTable, ImgSquare, Loading, Button } from '@miq/components';

import { supOrderServices } from './utils';
import { SupplierProductAddForm } from './forms';
import { ProductForm } from '../product/forms';
import { SupplierData } from './components';
import { SHOP_PATHS } from '../constants';

const formDefault = {
  order_id: '',
  items_stage: '',
  currency: '',
  is_paid: false,
  // is_paid_dt: '',
  // is_fulfilled_dt: '',
  total_cost: '',
};

export default function SupplierOrderStaffUpdateView(props) {
  const { sOrderSlug } = props.match.params;

  const [order, setOrder] = useState(null);
  const [selected, setSelected] = useState([]);
  const toast = useContext(ToastCtx);

  const form = useForm(formDefault);
  const { setValues } = form;

  useEffect(() => {
    supOrderServices
      .detail(sOrderSlug)
      .then((data) => {
        setOrder(data);

        setValues({
          order_id: data.order_id || '',
          items_stage: data.items_stage || '',
          currency: data.currency || '',
          is_paid: data.is_paid || false,
          // is_paid_dt: data.is_paid_dt || '',
          // is_fulfilled_dt: data.is_fulfilled_dt || '',
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

  if (!order) return null;

  console.log(order.stages);

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
      .then((data) => {})
      .catch((err) => {
        form.handleError(err);
      });
  };

  return (
    <AdminView
      back={props?.back}
      title="Modifier une commande"
      actions={<div></div>}
      className="supplier-order-update-view"
    >
      <div className="d-grid grid-md-3 gap-3">
        <div className="span-md-2">
          <SupplierProductAddForm
            order_slug={sOrderSlug}
            onSuccess={(newOrder) => {
              return setOrder(newOrder);
            }}
          />

          <AdminView.Section className="order-items mb-3">
            {order.items.map((item) => {
              const isSelected = selected.includes(item.slug);
              return (
                <div className="" key={item.slug}>
                  <div className="">
                    <input
                      type={'checkbox'}
                      checked={isSelected}
                      onChange={() => {
                        if (isSelected) setSelected(selected.filter((i) => i !== item.slug));
                        else setSelected([...selected, item.slug]);
                      }}
                    />
                  </div>

                  <OrderItem
                    item={item}
                    categories={order.categories}
                    onUpdate={(data) => {
                      setOrder({
                        ...order,
                        items: order.items.map((i) => {
                          if (i.slug === data.slug) return data;
                          return i;
                        }),
                      });
                    }}
                  />
                </div>
              );
            })}
          </AdminView.Section>
        </div>

        <div className="">
          <div className="" style={{ position: 'sticky', top: 0 }}>
            <Form context={form} onSubmit={handleSubmit} className="order-update-form">
              <AdminView.Section title="Order details">
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

const OrderItem = ({ item, ...props }) => {
  const [isEdit, setEdit] = useState(props.isEdit || false);
  const form = useForm({
    name: item.name || '',
    category: item.category || '',
    retail_price: item?.retail_price || 0.0,
    supplier_item_cost: item?.supplier_item_cost || 0.0,
    is_pre_sale: item.is_pre_sale || false,
    is_pre_sale_text: item.is_pre_sale_text || '',
  });
  if (!item?.slug) return null;

  const { values, errors } = form;
  return (
    <div className="order-item mb-2 border-1 rounded ">
      <div className="d-flex p-1">
        <div className="me-1">
          <ImgSquare {...item.cover_data} className="rounded" />
        </div>

        <div className="flex-1 detail">
          <div className="fw-bold" title={item.name}>
            <span className="me-2">{item.name}</span>
            {item?.page?.is_published && <PublishedStatusSpan is_published={item?.page?.is_published} pill short />}
          </div>
          <div className="">
            {item.is_on_sale ? (
              <span className="text-danger">{item.sale_price}</span>
            ) : (
              <span className="">{item.retail_price}</span>
            )}
          </div>

          <div className="mb-1 text-sm">
            {item.category_data && <span className="">{item.category_data.name}</span>}
            {item.is_pre_sale && <span className="">Pre sale</span>}/ {item.add_to_cart_count}
          </div>

          <div className="actions d-flex justify-content-between align-items-center">
            <div>
              <Button onClick={() => setEdit(!isEdit)} className="quick-update-btn btn-secondary-3">
                {`Quick update`}
              </Button>
            </div>

            <a href={SHOP_PATHS.productUpdate(item.slug)} target="_blank" className="update-btn btn btn-primary-2">
              {`Update »`}
            </a>
          </div>
        </div>
      </div>

      {isEdit && (
        <ProductForm
          context={form}
          prodSlug={item.slug}
          fields={['name', 'category', 'retail_price', 'is_pre_sale', 'is_pre_sale_text', 'supplier_item_cost']}
          className="order-item-form mb-2"
          onSuccess={props.onUpdate}
        >
          <div className="d-grid grid-md-5 gap-2">
            <div className="span-md-3 mb-2">
              <ProductForm.NameInput error={errors.name} className="mb-1" />
              <ProductForm.CategoryInput categories={props?.categories} error={errors.category} className="mb-1" />
              <ProductForm.RetailPriceInput error={errors.retail_price} className="mb-1" />

              <Form.Label value={`Supplier item cost (${item.supplier_item_cost_currency})`} />
              <Form.TextInput name="supplier_item_cost" className="" />
            </div>

            <div className="span-md-2">
              <div className="mb-3">
                <div className="mb-1">
                  <ProductForm.PresaleCheckboxInput error={errors.is_pre_sale} className="mb-1" />
                </div>

                {form.values.is_pre_sale && (
                  <div className="mb-1">
                    <ProductForm.PresaleTextInput error={errors.is_pre_sale_text} />
                  </div>
                )}

                <Form.Submit value="Update" className="btn btn-primary-3 w-100" />
              </div>
              <SupplierData product={item} />
            </div>
          </div>
        </ProductForm>
      )}
    </div>
  );
};
