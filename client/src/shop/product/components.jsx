import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Form, { useForm, FormProvider } from "@miq/form";
import { ImageAltTextInput } from "@miq/adminjs";
import { Table, ItemTable, ImgUploadButton } from "@miq/components";
import { productServices } from "./utils";

export const ProductRow = ({ product, ...props }) => {
  if (!product) return null;

  return (
    <Table.Tr className="">
      <Table.Td className="w-100">
        <Link to={`/staff/shop/products/${product.slug}/`}>
          <div className="mb-1" title={product.name}>
            {product.name}
          </div>
        </Link>
      </Table.Td>
    </Table.Tr>
  );
};

export const ProductTable = (props) => {
  const { data = { results: [] } } = props;

  const handlePreviousClick = (e) => {};
  const handleNextClick = (e) => {};

  return (
    <div>
      <ItemTable
        className="w-100"
        items={data.results}
        renderItem={(item) => <ProductRow {...props} product={item} key={item.slug} />}
        pagination={{
          count: data.count,
          next: data.next,
          previous: data.previous,
          onPreviousClick: handlePreviousClick,
          onNextClick: handleNextClick,
        }}
      />
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.shape({ results: PropTypes.array }).isRequired,
  setData: PropTypes.func.isRequired,
};

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

  if (!form) return null;

  return (
    <>
      <Form.Label value="Name" className="mb-1" />
      <Form.TextInput
        {...rest}
        required
        name="name"
        onSave={({ value }) => {
          if (!value || !product || !product.slug) return;

          return productServices
            .patch(product.slug, { name: value }, { name: product.name })
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

export const ProductDescriptionInput = ({ onSuccess, onError, ...props }) => {
  const { product, placeholder = "Give a description to the item", form, label, ...rest } = props;
  if (!product || !form) return null;

  return (
    <>
      {label && <Form.Label value="Description" className="mb-1" />}
      <Form.TextAreaX
        {...rest}
        name="description"
        onSave={({ name, value }) =>
          productServices
            .patch(product.slug, { [name]: value }, { [name]: product[name] })
            .then((data) => {
              if (onSuccess) return onSuccess(data);
            })
            .catch((err) => {
              if (onError) return onError(err);
            })
        }
        error={form.errors.description}
        placeholder={placeholder}
      />
    </>
  );
};

export const ProductSlugPublicInput = ({ onSuccess, onError, ...props }) => {
  const { product, placeholder = "Seo slug ...", form, ...rest } = props;
  if (!product || !form) return null;

  return (
    <>
      <Form.Label value="Slug" className="mb-1" />
      <Form.TextInput
        {...rest}
        required
        name="slug_public"
        onSave={({ value }) =>
          productServices
            .patch(product.slug, { slug_public: value }, { slug_public: product.slug_public })
            .then((data) => {
              if (onSuccess) return onSuccess(data);
            })
            .catch((err) => {
              if (onError) return onError(err);
            })
        }
        error={form.errors.slug_public}
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
ProductUpdateForm.DescriptionInput = ProductDescriptionInput;
ProductUpdateForm.SlugPublicInput = ProductSlugPublicInput;

export const ProductCreateForm = ({ onSuccess, onError, ...props }) => {
  const form = useForm({ name: "" });

  return (
    <Form
      {...props}
      context={form}
      onSubmit={(e) => {
        e.preventDefault();
        return productServices
          .post({ name: form.values.name })
          .then((data) => {
            if (onSuccess) return onSuccess(data);
          })
          .catch((err) => {
            if (onError) return onError(err);
            form.handleError(err);
          });
      }}
    >
      <ProductNameInput form={form} placeholder={"Give a name to the new item ..."} />
    </Form>
  );
};

export const ProductImageUploadButton = ({ product, ...props }) => {
  if (!product || !product.slug) return null;

  return (
    <ImgUploadButton
      multiple={true}
      onCreate={(imgsArray) => {
        imgsArray = imgsArray.filter((img) => img && img.slug);

        productServices
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
  const form = useForm({ alt_text: image.alt_text || "" });

  return (
    <FormProvider value={form}>
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
