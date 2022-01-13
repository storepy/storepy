import { useState } from 'react';

import { AdminView } from '@miq/adminjs';
import Form, { useForm } from '@miq/form';
import { supOrderServices } from './utils';

export const SupplierProductAddForm = ({ order_slug, ...props }) => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm({
    supplier_name: 'shein',
    url: 'https://us.shein.com/Floral-Lace-Underwire-Garter-Lingerie-Set-p-1925944-cat-1862.html',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const { url } = form.values;

    switch (form.values.supplier_name) {
      case 'zara':
        return null;

      default:
        if (!url.includes('shein')) return null;
        return supOrderServices
          .getSheinProductData(order_slug, { url })
          .then((data) => {
            setLoading(false);
            form.setValue('url', '');
            return props?.onSuccess(data);
          })
          .catch((err) => {
            form.setErrors({ ...form.errors, url: 'Something went wrong.' });
            setLoading(false);
            return props?.onError(data);
          });
    }
  };

  return (
    <AdminView.Section title={props?.title || 'Ajouter un produit'} className="supplier-product-add-section mt-3">
      <Form context={form} onSubmit={handleSubmit} className="supplier-product-add-form">
        {isLoading && <div className="my-3">Getting product data. Please wait ...</div>}

        <div className="d-flex flex-column flex-md-row">
          <Form.TextInput
            required
            name="url"
            type="url"
            error={form.errors.url}
            placeholder="Add product source url ..."
            className="me-1"
            disabled={isLoading}
          />

          <Form.Submit value="Get data" className="btn btn-primary-3" disabled={isLoading} />
        </div>
      </Form>
    </AdminView.Section>
  );
};

// props.productForm.setValues({
//   name: data.name || '',
//   description: data.description || '',
//   category: data.category || '',
//   retail_price: data?.retail_price || 0.0,
//   is_pre_sale: data.is_pre_sale || false,
//   is_pre_sale_text: data.is_pre_sale_text || '',
//   is_on_sale: data.is_on_sale || false,
//   sale_price: data?.sale_price || 0.0,
// });
// props.setProduct(data);
