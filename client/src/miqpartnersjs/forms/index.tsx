import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { isRequired } from '@miq/utiljs';
import { SharedDataCtx } from '@miq/contextjs';
import Form, { EmailField, FirstNameField, LastNameField, useForm } from '@miq/formjs';

import { createPartner } from '../utils';

import {
  InstagramField,
  PartnerAgeField,
  PartnerPhoneField,
  PartnerSizeSelectField,
  TikTokField,
  YNSelectField,
} from './fields';

// const { i18n } = window;

export const PartnerListFilterForm = () => {
  const [params, setParams] = useSearchParams();
  return (
    <form
      action="."
      onSubmit={(e) => {
        e.preventDefault();
        params.delete('page');
        setParams(params);
      }}
    >
      <ParamsToggleField name="is_newbie" label="Newbies" />
      <ParamsToggleField name="wears_lingerie" label="Wears lingerie" />
    </form>
  );
};

const ParamsToggleField = (props: React.ComponentPropsWithoutRef<'input'> & { label: string; name: string }) => {
  const [params, setParams] = useSearchParams();

  const { label, ...rest } = props;
  const { name = isRequired('name') } = rest;

  return (
    <div>
      <input
        className="miq-checkbox me-1"
        {...rest}
        type="checkbox"
        onChange={(e) => {
          const { checked } = e.target;
          if (!checked) params.delete(name);
          else params.set(name, `${checked}`);
          params.delete('page');
          setParams(params);
        }}
        checked={Boolean(params.get(name)) || false}
      />
      <label className="miq-form-label">{label}</label>
    </div>
  );
};

export const PartnerOnboardForm = () => {
  const ctx: any = React.useContext(SharedDataCtx);
  // const { partner = {} } = ctx;

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
    wears_lingerie: '',
    is_sn_active: '',
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

      <div className="mb-3">
        <Form.Field label="Êtes-vous comfortable à poser en lingerie et maillots?" error={errors.wears_lingerie}>
          <YNSelectField required name="wears_lingerie" />
        </Form.Field>
      </div>

      <div className="mb-3">
        <Form.Field label="Êtes-vous active sur les réseaux sociaux?" error={errors.is_sn_active}>
          <YNSelectField required name="is_sn_active" />
        </Form.Field>
      </div>

      <div className="text-center">
        <Form.Submit className="btn-primary btn-md fw-bold">Envoyer</Form.Submit>
      </div>
    </Form>
  );
};
