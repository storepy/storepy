import React, { useState } from 'react';
import Form, { useForm } from '@miq/form';

import { Button } from '@miq/components/';
import { getClassName, Service } from '@miq/utils';

const cartService = new Service('/shop/cart/');

const ERROR_MSG = {
  name_length: 'Veuillez entrer votre nom et prénom.',
  number_length: 'Nous ne pouvons pas vous contacter sans votre numéro.',
  size_empty: 'Sélectionez votre taille.',
};
const stripNonDigits = (value) => {
  return value.replace(/\D/, '');
};

const LeadFormFragment = ({ form, ...props }) => {
  if (!form) return null;

  return (
    <>
      <p className="mb-2">
        Veuillez entrer votre nom et numéro et nous vous contacterons dès que cet article sera disponible.
      </p>

      <div className="mb-1">
        <Form.Label value="Nom et prénom" />
        <Form.TextInput required name="name" error={form.errors.name} maxLength={99} minLength={4} />
      </div>
      <div className="mb-1">
        <Form.Label value="Numéro de téléphone/whatsapp" />
        <Form.TextInput
          required
          name="number"
          type="tel"
          value={form.values.number}
          pattern="[0-9]*"
          onChange={(e) => {
            // const { valueAsNumber, value, validity } = e.target;
            // console.log(value, validity.valid, valueAsNumber);
            form.setValue('number', stripNonDigits(e.target.value));
          }}
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
          error={form.errors.number}
          minLength={7}
          maxLength={16}
        />
      </div>
      <div className="mb-1">
        <Form.Label value="Adresse email (facultatif)" />
        <Form.TextInput name="email" type="email" error={form.errors.email} minLength={4} />
      </div>
      <div className="mb-2">
        <Form.Label value="Instagram (facultatif)" />
        <Form.TextInput name="ig_handle" minLength={3} error={form.errors.ig_handle} />
      </div>
    </>
  );
};

const sizes = [
  { label: 'XS', value: 'XS', title: 'Extra Small' },
  { label: 'S', value: 'S', title: 'Small' },
  { label: 'M', value: 'M', title: 'Medium' },
  { label: 'L', value: 'L', title: 'Large' },
  { label: 'XL', value: 'XL', title: 'Extra Large' },
];

const ProductSizeRadio = (props) => {
  if (!props.form) return null;

  const { form } = props;
  const error = form.errors.size;

  return (
    <>
      <div className="product-size-radio-input">
        {sizes.map((size) => {
          const checked = form.values.size === size.value;

          return (
            <div
              className={getClassName(['radio', checked && 'checked'])}
              onClick={() => {
                if (form.errors.size) form.setErrors({ ...form.errors, size: null });
                form.setValue('size', size.value);
              }}
              role="radio"
              key={size.label}
            >
              {size.label}
            </div>
          );
        })}
      </div>
      {error && <div className="text-danger my-2">{error}</div>}
    </>
  );
};

export default function ProductPreSaleForm(props) {
  const form = useForm({ name: '', number: '', email: '', ig_handle: '', size: '' });

  const { product, ctx } = props;

  if (!product || !product.slug || !product.is_pre_sale) return null;

  const { cart, cart_id, lead_id } = ctx;

  console.log(cart, cart_id, lead_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.values.size) return form.setErrors({ ...form.errors, size: ERROR_MSG.size_empty });

    const { name } = form.values;
    if (!name || name.length < 4) return form.setErrors({ ...form.errors, name: ERROR_MSG.name_length });

    const number = stripNonDigits(form.values.number);
    if (!number || number.length > 8) return form.setErrors({ ...form.errors, number: ERROR_MSG.number_length });

    if (form.hasErrors()) return;

    return cartService
      .post({ ...form.values, product: product.slug })
      .catch((err) => {
        console.log(err?.response);
        form.handleError(err);
      })
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  };

  return (
    <div className="product-pre-sale">
      <Form context={form} method="POST" onSubmit={handleSubmit} className="contact-form">
        <div className="my-3">
          <ProductSizeRadio form={form} />
        </div>

        {!lead_id && <LeadFormFragment form={form} />}

        <div className="mb-3">
          <Button type="submit" className="contact-submit-btn btn btn-primary w-100">
            Contactez-moi
          </Button>
        </div>
      </Form>
    </div>
  );
}

// <button>Sauvegarder pour plus tard</button>
// <button>VOIR TOUS LES ARTICLES SAUVEGARDÉS</button>
