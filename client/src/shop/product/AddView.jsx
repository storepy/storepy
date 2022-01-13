import { useState } from 'react';
// import { Switch, Route } from "react-router-dom";
import { AdminView } from '@miq/adminjs';

import Form, { useForm } from '@miq/form';
import { addForwardSlash } from '@miq/utils';

import { productServices } from './utils';
import { productFormDefaultValues } from './UpdateView';
import { ProductQuickUpdateForm } from './forms';
import { SupplierData } from '../orders/components';

export default function StaffProductAddView(props) {
  const form = useForm(productFormDefaultValues);
  const [product, setProduct] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminView title="Add a new product" back={props?.back} className="product-add-view">
      <AdminView.TabNavLinks
        urls={[
          { exact: true, to: addForwardSlash(props.match.url), label: 'Product info' },
          { to: `${addForwardSlash(props.match.url)}source/`, label: 'Add from source' },
        ]}
        className="my-2"
      />

      {product.slug && (
        <div className="d-grid grid-md-5 gap-2">
          <div className="span-md-4">
            <ProductQuickUpdateForm
              form={form}
              product={product}
              setProduct={setProduct}
              categories={product?.categories}
            />
          </div>

          <div className="span-md-1">
            <SupplierData product={product} />

            <div className="my-3">
              <a
                href={props.location.pathname.replace('new', product.slug)}
                target="_blank"
                className="btn btn-primary"
              >
                Go to update page
              </a>
            </div>
          </div>
        </div>
      )}

      {/* <Form context={form} onSubmit={handleSubmit}>
        <AdminView.Section>
          <div className="mb-2">
            <ProductNameInput required form={form} placeholder={"Give a name to the new item ..."} />
          </div>
        </AdminView.Section>

        <Form.Submit value="Add new product" className="btn btn-primary" />
      </Form> */}
    </AdminView>
  );
}
