import * as React from 'react';

import Form, { EmailField, FirstNameField, LastNameField, useForm } from '@miq/formjs';
import { TPartner } from '../types';
import { createPartner } from '../utils';
import {
  InstagramField,
  PartnerAgeField,
  PartnerPhoneField,
  PartnerSizeSelectField,
  TikTokField,
  YNSelectField,
} from './fields';
import { SharedDataCtx } from '@miq/contextjs';

export const PartnerOnboardForm = () => {
  const ctx: any = React.useContext(SharedDataCtx);
  const { partner = {} } = ctx;

  const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    age: '',
    size: '',
    //
    interests: [],
    is_newbie: '',
    wears_lingerie: false,
    //
    ig: '',
    tt: '',
  });

  const { values, errors } = form;

  return (
    <Form
      context={form}
      onSubmit={(e) => {
        e.preventDefault();

        // console.log(values);
        if (values.age > 35 || values.age < 20) {
          form.setError('age', 'Nous recherchons des femmes de plus de 20 ans.');
          return;
        }
        if (values.interests.length < 3) {
          form.setError('interests', 'Choisissez au moins 3 catégories');
          return;
        }

        createPartner(values)
          .then(({ data }) => {
            ctx.updateKey('partner', data);
          })
          .catch((er) => {
            form.handleError(er);
          });
      }}
    >
      <div className="mb-2">
        <PartnerPhoneField required error={errors.phone} />
      </div>

      <div className="d-grid grid-md-2 gap-2 mb-2">
        <LastNameField required error={errors.last_name} placeholder="Votre nom" />
        <FirstNameField required error={errors.first_name} placeholder="Votre prénom" />
      </div>

      <div className="mb-2">
        <EmailField error={errors.email} placeholder="Votre email si vous en avez un" />
      </div>

      <div className="d-grid grid-md-2 gap-2 mb-2">
        <InstagramField required error={errors.ig} />
        <TikTokField error={errors.tt} />
      </div>

      <div className="d-grid grid-md-2 gap-2 mb-2">
        <PartnerAgeField required />
        <PartnerSizeSelectField required />
      </div>

      <div className="mb-3">
        <Form.Field label="Choisissez les catégories qui vous intéressent" error={errors.interests}>
          {[
            { label: 'Robes', value: 'robes' },
            { label: 'Tops', value: 'tops' },
            { label: 'Beauté (Makeup, etc..)', value: 'beauty' },
            { label: 'Lingerie', value: 'lingerie' },
            { label: 'Maillots de bain', value: 'swim' },
            { label: 'Accessoires & Bijoux', value: 'jewelry' },
          ].map((int) => {
            return (
              <Form.Field {...int} checkbox key={int.label}>
                <Form.Checkbox
                  name="interests"
                  onChange={(e) => {
                    const { name, checked } = e.target;
                    if (form.errors.interests) {
                      form.setError(name, null);
                    }
                    if (checked) form.setValue('interests', [...form.values.interests, int.value]);
                    else
                      form.setValue(
                        'interests',
                        form.values.interests.filter((i: string) => i !== int.value)
                      );
                  }}
                  checked={form.values.interests.includes(int.value)}
                />
              </Form.Field>
            );
          })}
        </Form.Field>
      </div>

      <div className="mb-3">
        <Form.Field label="Avez-vous déjà collaboré avec des marques?" error={errors.is_newbie}>
          <YNSelectField required name="is_newbie" />
        </Form.Field>
      </div>

      <div className="mb-2">
        <Form.Field label="Êtes-vous comfortable à poser en lingerie?" error={errors.wears_lingerie}>
          <YNSelectField required name="wears_lingerie" />
        </Form.Field>
      </div>

      <div className="text-center">
        <Form.Submit className="btn-primary btn-md fw-bold">Envoyer</Form.Submit>
      </div>
    </Form>
  );
};
