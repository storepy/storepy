import { useEffect } from 'react';
import { AdminView, StaffCoverUpdateForm, PublishedStatusSpan } from '@miq/adminjs';
import Form from '@miq/form';
import { productServices } from './utils';
import { ProductImageAltTextInput } from './components';

export function ProductQuickUpdateForm({ form, product, ...props }) {
  const { setProduct, toast, categories } = props;
  const productSlug = product?.slug;

  useEffect(() => {}, [productSlug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fD = {
      retail_price: form.values.retail_price,
      is_on_sale: form.values.is_on_sale,
      is_pre_sale: form.values.is_pre_sale,
    };

    if (form.values.category) fD.category = form.values.category;
    if (form.values.is_on_sale) fD.sale_price = form.values.sale_price;

    if (form.values.is_pre_sale) fD.is_pre_sale_text = form.values.is_pre_sale_text;

    return productServices
      .patch(product.slug, fD)
      .then((data) => {
        setProduct?.({ ...product, ...data });
        toast?.success({ message: 'Product updated.' });
      })
      .catch((err) => {
        toast?.error({ message: 'Could not update product.' });
        return form.handleError(err);
      });
  };

  return (
    <ProductForm context={form} onSubmit={handleSubmit}>
      <div className="d-grid grid-md-3 gap-3">
        <div className="span-md-2">
          <AdminView.Section
            title="Details"
            actions={<PublishedStatusSpan is_published={product?.page?.is_published} pill />}
          >
            <div className="mb-1">
              <ProductNameInput error={form.errors.name} />
            </div>

            {categories && (
              <div className="mb-1">
                <ProductCategoryInput categories={categories} error={form?.errors?.category} />
              </div>
            )}

            <div className="mb-1">
              <div className="mb-1">
                <ProductRetailPriceInput error={form?.errors?.retail_price} />
              </div>

              {/* PRE SALE */}
              <div className="mb-1">
                <div className="d-flex align-items-center mb-1">
                  <ProductPresaleCheckboxInput error={form?.errors?.is_pre_sale} />
                </div>

                {form.values.is_pre_sale && (
                  <div className="mb-2">
                    <ProductPresaleTextInput error={form?.errors?.is_pre_sale_text} />
                  </div>
                )}
              </div>

              {/* SALE  */}
              <div className="d-flex align-items-center mb-1">
                <ProductOnSaleCheckboxInput error={form?.errors?.is_on_sale} />
              </div>

              {form.values.is_on_sale && (
                <div className="mb-2">
                  <ProductSalePriceInput error={form?.errors?.sale_price} />
                </div>
              )}
            </div>

            <div className="my-3">
              <Form.Submit value="Update product" className="btn btn-primary-3" />
            </div>
          </AdminView.Section>
        </div>

        <div className="">
          <StaffCoverUpdateForm
            slug={product?.cover}
            data={product.cover_data}
            onCreate={(imgData) => {
              productServices
                .patch(product.slug, { cover: imgData.slug })
                .then((data) => {
                  setProduct?.({ ...product, ...data });
                  toast?.success({ message: 'Product cover updated.' });
                })
                .catch((err) => {
                  toast?.error({ message: 'Could not upload cover image.' });
                });
            }}
            onUpdate={(cover_data) => {
              toast?.success({ message: 'Product cover updated.' });
              return setProduct?.({ ...product, cover_data });
            }}
            onDelete={() => {
              return setProduct?.({ ...product, cover_data: null, cover: null });
            }}
            className="mb-1"
          />
          <ProductImageAltTextInput image={product?.cover_data} />
        </div>
      </div>
    </ProductForm>
  );
}

// INPUTS

export const ProductNameInput = (props) => {
  const { showLabel = true, label = 'Name', ...input } = props;
  const { placeholder = 'Give a name to the item', ...rest } = input;
  return (
    <>
      {showLabel && <Form.Label value={label} className="mb-1" />}
      <Form.TextInput {...rest} required name="name" placeholder={placeholder} maxLength={99} />
    </>
  );
};

export const ProductCategoryInput = (props) => {
  const { showLabel = true, label = 'Category', ...input } = props;
  const { categories, ...rest } = input;

  return (
    <>
      {showLabel && <Form.Label value={label} />}
      <Form.SelectInput {...rest} required name="category" nullValue={{ label: 'Select category' }}>
        {categories?.items?.map((cat) => {
          return <Form.SelectInput.Option {...cat} key={cat.value} />;
        })}
      </Form.SelectInput>
    </>
  );
};

export const ProductRetailPriceInput = (props) => {
  const { showLabel = true, label = 'Retail price', ...rest } = props;

  return (
    <>
      {showLabel && <Form.Label value={label} id="retail_price_label" />}
      <Form.TextInput
        {...rest}
        required
        type="number"
        name="retail_price"
        aria-describedby="retail_price_label"
        min="0"
        step="0.01"
      />
    </>
  );
};

export const ProductPresaleCheckboxInput = (props) => {
  const { showLabel = true, label = 'Pre-sale', ...rest } = props;

  return (
    <div className="d-flex">
      <Form.CheckboxInput {...rest} name="is_pre_sale" className="me-2" />
      <Form.Label value={label} />
    </div>
  );
};

export const ProductPresaleTextInput = (props) => {
  return (
    <>
      <Form.Label value="Pre sale text" id="is_pre_sale_text_label" className="miq-checkbox-label" />
      <Form.TextAreaX name="is_pre_sale_text" aria-describedby="is_pre_sale_text_label" />
    </>
  );
};

export const ProductOnSaleCheckboxInput = (props) => {
  const { showLabel = true, label = 'On Sale', ...rest } = props;

  return (
    <div className="d-flex">
      <Form.CheckboxInput {...rest} name="is_on_sale" className="me-2" />
      <Form.Label value={label} />
    </div>
  );
};

export const ProductSalePriceInput = (props) => {
  const { showLabel = true, label = 'Sale price', ...rest } = props;
  return (
    <>
      {showLabel && <Form.Label value={label} id="sale_price_label" className="miq-checkbox-label" />}
      <Form.TextInput
        {...rest}
        required
        type="number"
        name="sale_price"
        aria-describedby="sale_price_label"
        min="0"
        step="0.01"
      />
    </>
  );
};

export const ProductStageSelect = (props) => {
  const { showLabel = true, label = 'Stage', ...input } = props;
  const { stages, name, ...rest } = input;

  return (
    <>
      {showLabel && <Form.Label value={label} />}
      <Form.SelectInput {...rest} required name={name || 'stage'} nullValue={{ label: 'Select stage' }}>
        {stages?.map?.((stage) => {
          return <Form.SelectInput.Option {...stage} key={stage.value} />;
        })}
      </Form.SelectInput>
    </>
  );
};

export const ProductForm = ({ children, context, fields = [], prodSlug, ...props }) => {
  const { onSuccess, onError, ...rest } = props;

  const handleSubmit = (e) => {
    if (!context || !fields) return;

    e.preventDefault();
    const fD = {
      // name: context.values.name,
      // retail_price: form.values.retail_price,
      // is_on_sale: form.values.is_on_sale,
      // is_pre_sale: form.values.is_pre_sale,
    };

    fields.forEach((field) => {
      const value = context.values[field];
      if (value == null) return;
      fD[field] = value;
    });

    // if (form.values.category) fD.category = form.values.category;
    // if (form.values.is_on_sale) fD.sale_price = form.values.sale_price;

    // if (form.values.is_pre_sale) fD.is_pre_sale_text = form.values.is_pre_sale_text;
    if (!prodSlug) return;

    return productServices
      .patch(prodSlug, fD)
      .then((data) => {
        props?.onSuccess?.(data);
      })
      .catch((err) => {
        if (props.onError) return props?.onError?.(err);

        return context?.handleError?.(err);
      });
  };
  return (
    <Form {...rest} context={context} onSubmit={props.onSubmit || handleSubmit}>
      {children}
    </Form>
  );
};

ProductForm.NameInput = ProductNameInput;
ProductForm.CategoryInput = ProductCategoryInput;
ProductForm.RetailPriceInput = ProductRetailPriceInput;
ProductForm.PresaleCheckboxInput = ProductPresaleCheckboxInput;
ProductForm.PresaleTextInput = ProductPresaleTextInput;
ProductForm.OnSaleCheckboxInput = ProductOnSaleCheckboxInput;
ProductForm.SalePriceInput = ProductSalePriceInput;
ProductForm.StageSelect = ProductStageSelect;
