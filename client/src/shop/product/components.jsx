import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Form, { useForm, FormProvider } from '@miq/form';
import { ImageAltTextInput } from '@miq/adminjs';
import { ImgUploadButton } from '@miq/components';
import { productServices } from './utils';

//
// ========================= FORM COMPONENTS ===================================================================
//

export const ProductImageUploadButton = ({ product, ...props }) => {
  if (!product || !product.slug) return null;

  return (
    <ImgUploadButton
      multiple={true}
      className="btn-primary-3"
      onCreate={(imgsArray) => {
        imgsArray = imgsArray.filter((img) => img && img.slug);
        return productServices
          .patch(product.slug, { images: [...product.images, ...imgsArray.map((img) => img.slug)] })
          .then((data) => {
            if (props.onCreateSuccess) props.onCreateSuccess(data);
          })
          .catch((err) => {
            if (props.onCreateError) props.onCreateError(err);
          });
      }}
    />
  );
};

export const ProductImageAltTextInput = ({ image, ...props }) => {
  const alt_text = image?.alt_text || '';

  const form = useForm({ alt_text });

  const imgSlug = image?.slug;
  const setValues = form.setValues;

  useEffect(() => {
    setValues({ alt_text });
  }, [imgSlug, setValues, alt_text]);

  if (!image || !image.slug) return null;

  return (
    <FormProvider value={form} className={props.className}>
      <ImageAltTextInput
        required
        image={image}
        onSuccess={props.onSuccess}
        onError={props.onError}
        placeholder="Add an alternative text ..."
      />
    </FormProvider>
  );
};

ProductImageAltTextInput.propTypes = {
  image: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),

  onUpdate: PropTypes.func,
  onError: PropTypes.func,
};

export const ProductCoverUploadButton = ({ children, product, ...props }) => {
  if (!product || !product.slug) return null;

  const handleCoverCreate = ({ slug }) => {
    productServices
      .patch(product.slug, { cover: slug })
      .then((data) => {
        if (props.onCreateSuccess) props.onCreateSuccess(data);
      })
      .catch((err) => {
        if (props.onCreateError) props.onCreateError(err);
      });
  };
  const handleCoverUpdate = (imgData) => {
    if (props.onUpdateSuccess) props.onUpdateSuccess(imgData);
  };

  return (
    <ImgUploadButton
      slug={product.cover_data ? product.cover_data.slug : null}
      onCreate={handleCoverCreate}
      onUpdate={handleCoverUpdate}
      className="product-cover-upload-button"
    >
      {children}
    </ImgUploadButton>
  );
};

ProductCoverUploadButton.propTypes = {
  children: PropTypes.any.isRequired,
  product: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
  onCreateSuccess: PropTypes.func,
  onCreateError: PropTypes.func,
  onUpdateSuccess: PropTypes.func,
  onUpdateError: PropTypes.func,
};
