import * as React from 'react';

import Form, { SelectFieldProps, TextFieldProps } from '@miq/formjs';

export const PartnerPhoneField = ({ label = 'Numéro', text, error, ...props }: TextFieldProps) => (
  <Form.Field {...{ label, error, text }}>
    <Form.Phone
      required
      name="phone"
      {...props}
      onDebounce={({ value, ctx }) => {
        if (new Set(value).size === 1) ctx.setError('phone', 'Entrez votre Numéro de téléphone');
      }}
      placeholder="Votre Numéro de téléphone"
    />
  </Form.Field>
);

export const InstagramField = ({
  label = "Nom d'utilisateur Instagram",
  text,
  error,
  fieldCN,
  ...props
}: TextFieldProps) => {
  return (
    <Form.Field {...{ label, error, text, className: fieldCN }}>
      <Form.Text
        name="ig"
        required
        {...props}
        onDebounce={({ value, ctx }) => {
          if (value.includes(' ')) ctx?.setError('ig', "Ce nom d'utilisateur n'existe pas.");
        }}
        maxLength={99}
        minLength={2}
        placeholder="Votre instagram"
      />
    </Form.Field>
  );
};

export const TikTokField = ({ label = "Nom d'utilisateur Tiktok", text, error, fieldCN, ...props }: TextFieldProps) => (
  <Form.Field {...{ label, error, text, className: fieldCN }}>
    <Form.Text
      name="tt"
      {...props}
      onDebounce={({ value, ctx }) => {
        if (value.includes(' ')) ctx?.setError('tt', "Ce nom d'utilisateur n'existe pas.");
      }}
      maxLength={99}
      minLength={2}
      placeholder="Votre tiktok si vous l'avez"
    />
  </Form.Field>
);

export const PartnerAgeField = ({
  label = 'Age',
  text = 'Nous recherchons des femmes de plus de 20 ans.',
  error,
  ...props
}: TextFieldProps) => (
  <Form.Field {...{ label, error, text }}>
    <Form.Select required name="age" nullValue={{ label: 'Sélectionnez votre age ...' }}>
      {[...Array(35 - 21 + 1)].map((_, i) => {
        const value = `${21 + i}`;
        return <Form.Option label={value} value={value} key={i} />;
      })}
    </Form.Select>
  </Form.Field>
);

export const PartnerSizeSelectField = (props: SelectFieldProps) => {
  const { label, text, error, ...rest } = props;

  return (
    <Form.Field {...{ label: 'Taille', text: 'Vous portez quelle taille', error }}>
      <Form.Select {...rest} required name="size" nullValue={{ label: 'Sélectionnez votre taille ...' }}>
        {sizes.map((size) => {
          return <Form.Option {...size} key={size.value} />;
        })}
      </Form.Select>
    </Form.Field>
  );
};

export const YNSelectField = (props: SelectFieldProps) => {
  const { label, text, error, ...rest } = props;

  return (
    <Form.Field {...{ label, text, error }}>
      <Form.Select nullValue={{ label: 'Sélectionnez votre réponse' }} {...rest}>
        {[
          { label: 'Non', value: 'non' },
          { label: 'Oui', value: 'oui' },
        ].map((size) => {
          return <Form.Option {...size} key={size.value} />;
        })}
      </Form.Select>
    </Form.Field>
  );
};

const sizes = [
  { label: 'XS (Extra-small)', value: 'xs' },
  { label: 'S (Small)', value: 's' },
  { label: 'M (Medium)', value: 'm' },
  { label: 'L (large)', value: 'l' },
  { label: 'XL (Extra-large)', value: 'xl' },
];
