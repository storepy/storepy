import * as React from 'react';

import lang from './fields.lang';

import Form, { SelectFieldProps, TextFieldProps } from '@miq/formjs';

const { i18n } = window;

export const PartnerPhoneField = ({
  label = i18n(lang, 'PhoneField.label'),
  text,
  error,
  ...props
}: TextFieldProps) => (
  <Form.Field {...{ label, error, text }}>
    <Form.Phone
      required
      name="phone"
      {...props}
      onDebounce={({ value, ctx }) => {
        if (new Set(value).size === 1) ctx.setError('phone', i18n(lang, 'PhoneField.error'));
      }}
      placeholder={i18n(lang, 'PhoneField.placeholder')}
    />
  </Form.Field>
);

export const InstagramField = ({
  label = i18n(lang, 'IGField.label'),
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
          if (value.includes(' ')) ctx?.setError('ig', i18n(lang, 'IGField.error'));
        }}
        maxLength={99}
        minLength={2}
        placeholder={i18n(lang, 'IGField.placeholder')}
      />
    </Form.Field>
  );
};

export const TikTokField = ({
  label = i18n(lang, 'TTField.label'),
  text,
  error,
  fieldCN,
  ...props
}: TextFieldProps) => (
  <Form.Field {...{ label, error, text, className: fieldCN }}>
    <Form.Text
      name="tt"
      {...props}
      onDebounce={({ value, ctx }) => {
        if (value.includes(' ')) ctx?.setError('tt', i18n(lang, 'TTField.error'));
      }}
      maxLength={99}
      minLength={2}
      placeholder={i18n(lang, 'TTField.placeholder')}
    />
  </Form.Field>
);

export const PartnerAgeField = ({
  label = i18n(lang, 'AgeField.label'),
  text = i18n(lang, 'AgeField.text'),
  error,
}: TextFieldProps) => (
  <Form.Field {...{ label, error, text }}>
    <Form.Select required name="age" nullValue={{ label: i18n(lang, 'AgeField.nullValueLabel') }}>
      {[...Array(35 - 21 + 1)].map((_, i) => {
        const value = `${21 + i}`;
        return <Form.Option label={value} value={value} key={i} />;
      })}
    </Form.Select>
  </Form.Field>
);

export const PartnerSizeSelectField = (props: SelectFieldProps) => {
  const { label = i18n(lang, 'SizeField.label'), text = i18n(lang, 'SizeField.text'), error, ...rest } = props;

  return (
    <Form.Field {...{ label, text, error }}>
      <Form.Select {...rest} required name="size" nullValue={{ label: i18n(lang, 'SizeField.nullValueLabel') }}>
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
      <Form.Select nullValue={{ label: i18n(lang, 'Field.nullValueLabel') }} {...rest}>
        {[
          { label: i18n(lang, 'Field.no'), value: 'non' },
          { label: i18n(lang, 'Field.yes'), value: 'oui' },
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
