import { useState } from 'react';
import { AdminView } from '@miq/adminjs';

import Form, { useForm } from '@miq/form';
import { addForwardSlash } from '@miq/utils';
import { productFormDefaultValues } from './UpdateView';

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
