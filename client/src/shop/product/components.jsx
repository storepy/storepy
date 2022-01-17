import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { productServices } from './utils';
import { useForm, FormProvider, ImgUploadButton, ImageAltTextInput, Button, getClassName } from 'src/exports';

//#region ProductImageAltTextInput

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

//#endregion ProductImageAltTextInput

//#region BUTTONS > >

//#region StaffProductDeleteButton

/**
 * Delete a product
 * Usage:
 * ```js
 * <StaffProductDeleteButton label="Delete me!" prodSlug='123' onSuccess={()=>{}} onError={()=>{}} className="btn-danger-3" />
 * ```
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.prodSlug
 * @param {Function} props.onSuccess
 * @param {Function} props.onError
 * @param {string=} props.className
 * @param {string=} props.id
 * @augments {Component<Props, State>}
 */
export const StaffProductDeleteButton = ({ prodSlug, ...props }) => {
  if (!prodSlug) return null;
  const { className = 'btn-danger', label, onSuccess, onError } = props;
  return (
    <Button
      id={props.id}
      className={className}
      onClick={() => {
        return productServices
          .delete(prodSlug)
          .then(() => onSuccess?.({ prodSlug }))
          .catch((err) => onError?.(err));
      }}
    >
      {label || 'Supprimer cet article'}
    </Button>
  );
};
//#endregion StaffProductDeleteButton

//#region StaffProductPublishButton

/**
 * Button component for publishing a product
 * ```js
 * <StaffProductPublishButton
 *  product={product}
 *  prodSlug='slug'
 *  product={{slug: 'slug', page:{slug:'pageSlug'}}}
 *  onPublishSuccess={(data) => setProduct(data)}
 *  onUnpublishSuccess={(data) => setProduct(data)}
 *  onUnpublishSuccess={(err) => setError(err)}
 * />
 * ```
 * @param {Object} props
 * @param {string} props.prodSlug - slug of the product: required
 * @param {Object} props.product - product object
 * @param {Object} props.form - product form
 * @param {Function} props.onPublishSuccess publish success callback
 * @param {Function} props.onUnpublishSuccess unpublish success callback
 * @param {Function} props.onError
 * @param {Object} props.toast
 * @param {string} props.className
 * @param {string} props.id
 * @augments {Component<Props, State>}
 *
 */

export function StaffProductPublishButton(props) {
  const { prodSlug, product, toast, ...rest } = props;
  if (!prodSlug || !product?.page) return null;

  const { is_published } = product.page;
  const { form, onPublishSuccess, onUnpublishSuccess, onError } = props;

  const handlePublish = () => {
    if (is_published)
      return productServices
        .unpublish(prodSlug)
        .then((data) => onUnpublishSuccess?.(data))
        .catch((err) => {
          return toast?.error({ message: SHOP_MSGS.default });
        });

    return productServices
      .publish(prodSlug)
      .then((data) => onPublishSuccess?.(data))
      .catch((err) => {
        const { response = {} } = err;

        if (!response.data) {
          toast?.error({ message: SHOP_MSGS.default });
        }
        const { retail_price, category, page } = response.data;

        if (retail_price) {
          toast?.error({ message: SHOP_MSGS.product.publish_error_retail_price });
        }
        if (category) {
          if (form) form.handleError(err);
          toast?.error({ message: SHOP_MSGS.product.publish_error_category });
        }
        if (page) {
          toast?.error({ message: SHOP_MSGS.product.publish_error_page });
        }
        return onError?.(err);
      });
  };

  return (
    <Button
      id={props.id}
      onClick={handlePublish}
      className={getClassName([
        'staff-product-publish-button',
        is_published ? 'btn-danger' : 'btn-primary',
        props.className,
      ])}
    >
      {is_published ? 'Unpublish' : 'Publish'} product
    </Button>
  );
}

StaffProductPublishButton.propTypes = {
  /** product slug */
  prodSlug: PropTypes.string.isRequired,
  /** product data */
  product: PropTypes.shape({ page: PropTypes.shape({ is_published: PropTypes.bool }).isRequired }).isRequired,
  /** if props.form: calls form.handleError whenever applicable BEFORE calling props.onError */
  form: PropTypes.object,
  onPublishSuccess: PropTypes.func,
  onUnpublishSuccess: PropTypes.func,
  onError: PropTypes.func,
};

//#endregion

//#region ProductImageUploadButton

/**
 * Upload a product image
 * Usage:
 * ```js
 * <ProductImageUploadButton product={{prodData}} />
 * ```
 *
 * @param {Object} props
 * @param {Object} props.product
 * @param {bool} props.multiple
 * @param {Function} props.onCreate
 * @param {Function} props.onCreateSuccess
 * @param {Function} props.onCreateError
 * @augments {ImgUploadButton<Props, State>}
 */

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
//#endregion ProductImageButton

//#region ProductCoverUploadButton
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
//#endregion ProductCoverUploadButton

//#endregion BUTTONS
