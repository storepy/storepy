import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Form, { useForm, FormProvider } from "@miq/form";
import { ImageAltTextInput } from "@miq/adminjs";
import { ImgUploadButton } from "@miq/components";
import { productServices } from "./utils";

//
// ========================= FORM COMPONENTS ===================================================================
//

export const ProductCategoryInput = ({ onSuccess, onError, ...props }) => {
  const { placeholder = "Give a name to the item", form } = props;
  if (!form) return null;

  return (
    <>
      <Form.Label value="Name" className="mb-1" />
      <Form.TextInput {...props} name="name" error={form.errors.name} placeholder={placeholder} maxLength={99} />
    </>
  );
};

export const ProductNameInput = ({ onSuccess, onError, ...props }) => {
  const { product, placeholder = "Give a name to the item", form, ...rest } = props;

  const productSlug = product?.slug;

  // useEffect(() => {
  //   return () => {};
  // }, [productSlug]);

  if (!form) return null;

  return (
    <>
      <Form.Label value="Name" className="mb-1" />
      <Form.TextInput
        {...rest}
        required
        name="name"
        onSave={({ value }) => {
          if (!value || !product || !productSlug) return;

          return productServices
            .patch(productSlug, { name: value }, { name: product.name })
            .then((data) => {
              if (onSuccess) return onSuccess(data);
            })
            .catch((err) => {
              if (onError) return onError(err);
            });
        }}
        error={form.errors.name}
        placeholder={placeholder}
        maxLength={99}
      />
    </>
  );
};

export const ProductUpdateForm = ({ children, form, ...props }) => {
  if (!form) return null;
  return (
    <Form {...props} context={form}>
      {children}
    </Form>
  );
};

ProductUpdateForm.NameInput = ProductNameInput;

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
  const form = useForm({ alt_text: image?.alt_text || "" });

  const imgSlug = image?.slug;
  const alt_text = image?.alt_text;
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

export const SupplierData = ({ product, ...props }) => {
  if (!product) return null;

  return (
    <div className="product-supplier-data">
      <ul>
        <li>
          <span className="">Supplier</span>
          <span className="">{product.supplier_name}</span>
        </li>
        <li>
          <span className="">Item id</span>
          <span className="">{product.supplier_item_id}</span>
        </li>
        <li>
          <span className="">Category</span>
          <span className="">{product.supplier_item_category}</span>
        </li>

        <li>
          <span className="">Item cost</span>
          <span className="">
            {product.supplier_item_cost} ({product.supplier_item_cost_currency})
          </span>
        </li>
        <li>
          <a href={product.supplier_item_url} className="text-underline" target="_blank" rel="noopener noreferrer">
            View supplier page
          </a>
        </li>
      </ul>
    </div>
  );
};
