import React, { useState } from 'react';
import Form, { useForm } from '@miq/form';

import { IconButton, Icons } from '@miq/components';
import { Service, formatDate } from '@miq/utils';

const cartService = new Service('/shop/cart/');

const ERROR_MSG = {
  name_length: 'Veuillez entrer votre nom et prénom.',
  number_length: 'Nous ne pouvons pas vous contatcter sans votre numéro.',
  number_digit: '',
};

const presaleText = 'Voulez-vous être contactée dès que ce produit sera disponible?';

export default function ProductPreSaleForm(props) {
  const form = useForm({ name: 'michael', number: '97170307', email: '', ig_handle: '' });
  const [isOpen, setOpen] = useState(false);

  const { product, ctx } = props;

  // console.log(product.is_pre_sale);

  if (!product || !product.slug || !product.is_pre_sale) return null;

  const { cart, cart_id, lead_id } = ctx;

  // console.log(cart, cart_id, lead_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = form.values;
    if (!name || name.length < 4) return form.setErrors({ ...form.errors, name: ERROR_MSG.name_length });

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

  const handleNumberChange = (e) => {
    const { valueAsNumber } = e.target;
    form.setValue('number', valueAsNumber);
  };

  const { is_pre_sale_dt, is_pre_sale_text } = product || {};

  return (
    <div className="product-pre-sale">
      {is_pre_sale_dt && (
        <p className="product-pre-sale-dt">
          Ce produit sera disponible le{' '}
          <span className="dt">
            {formatDate(is_pre_sale_dt, { day: 'numeric', month: 'short', year: 'numeric' }, 'fr')}
          </span>
        </p>
      )}

      <p className="presale-text mb-3">{is_pre_sale_text || presaleText}</p>

      {!isOpen && (
        <div className="d-flex justify-content-center mb-3">
          <IconButton
            labelFirst
            label="Contactez-moi"
            onClick={() => setOpen(true)}
            Icon={Icons.Telephone}
            className="contact-toggle-btn btn-primary-3"
          />
        </div>
      )}

      {isOpen && (
        <div className="mb-3">
          <Form context={form} method="POST" onSubmit={handleSubmit} className="contact-form">
            <div className="mb-1">
              <Form.Label value="Nom et prénom" />
              <Form.TextInput required name="name" error={form.errors.name} maxLength={99} />
            </div>

            <div className="mb-1">
              <Form.Label value="Numéro de téléphone/whatsapp" />
              <Form.TextInput
                required
                name="number"
                type="tel"
                value={form.values.number}
                onChange={handleNumberChange}
                error={form.errors.number}
                // minLength={8}
                maxLength={16}
              />
            </div>
            <div className="mb-1">
              <Form.Label value="Adresse email (facultatif)" />
              <Form.TextInput name="email" type="email" minLength={4} />
            </div>
            <div className="mb-2">
              <Form.Label value="Instagram (facultatif)" />
              <Form.TextInput name="ig_handle" minLength={4} placeholder={`feminity`} />
            </div>

            <div className="mb-3">
              <button>Sauvegarder pour plus tard</button>
              <button>VOIR TOUS LES ARTICLES SAUVEGARDÉS</button>
              <Form.Submit value="Contactez-moi" className="contact-submit-btn btn btn-primary w-100" />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}
