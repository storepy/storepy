import { useContext, useEffect, useState } from "react";

import { AdminView } from "@miq/adminjs";
import Form, { useForm } from "@miq/form";
import {
  // Icons,
  // IconNavLink,
  ToastCtx,
  ImgSquare,
  // IconButton,
  ImgDeleteIconButton,
} from "@miq/components";

import { productServices } from "./utils";
import { ProductCoverUploadButton, ProductUpdateForm } from "./components";

export default function ProductUpdateView(props) {
  const { prodSlug } = props.match.params;

  const [product, setProduct] = useState(null);
  const toast = useContext(ToastCtx);

  const form = useForm({ name: "", description: "", title: "", slug_public: "" });
  const { setValues } = form;

  useEffect(() => {
    productServices
      .detail(prodSlug)
      .then((data) => {
        setProduct(data);

        setValues({
          name: data.name || "",
          description: data.description || "",
          title: data.page.title || "",
          slug_public: data.slug_public || "",
        });
      })
      .catch((err) => {
        if (err.response) {
          toast.error({ message: "Something went wrong" });
          if (err.response.status === 404) {
            return;
          }
        }
      });
  }, [prodSlug, setValues, toast]);

  if (!product) return null;

  const handlePageUpdate = ({ name, value }) => {
    productServices
      .patchPage(prodSlug, { [name]: value }, { [name]: product[name] })
      .then((data) => {
        setProduct(data);
        toast.success({ message: "Item updated." });
      })
      .catch((err) => {
        toast.error({ message: "Could not update item." });
      });
  };

  return (
    <AdminView title={form.values.name} className="product-update-view">
      <div className="view-header d-flex flex-column flex-md-row mb-2">
        <div className="cover">
          <ProductCoverUploadButton
            product={product}
            onCreateSuccess={(data) => {
              setProduct(data);
              toast.success({ message: "Product cover updated." });
            }}
            onCreateError={() => {
              toast.error({ message: "Could not upload cover image." });
            }}
            onUpdateSuccess={(imgData) => {
              setProduct({ ...product, cover: imgData.slug, cover_data: imgData });
              if (toast) toast.success({ message: "Product cover updated." });
            }}
            onUpdateError={() => {
              toast.error({ message: "Could not upload cover image." });
            }}
          >
            <ImgSquare {...product.cover_data} className="product-cover" />
          </ProductCoverUploadButton>

          {product.cover && (
            <ImgDeleteIconButton
              label="Delete cover"
              className="btn-danger-3"
              slug={product.cover_data.slug}
              // onSuccess={() => onProductUpdate({ ...product, cover_data: null, cover: null })}
            />
          )}
        </div>
        <div className="ms-1 ms-md-2">
          <div className="text-md fw-bold">{product.name}</div>
        </div>
      </div>

      <ProductUpdateForm form={form} product={product}>
        <AdminView.Section title="Details">
          <div className="mb-1">
            <ProductUpdateForm.NameInput
              product={product}
              form={form}
              onSuccess={(data) => {
                setProduct(data);
                toast.success({ message: "Item updated." });
              }}
              onError={(err) => {
                form.handleError(err);
                toast.error({ message: "Could not update item." });
              }}
            />
          </div>

          <div className="mb-1">
            <ProductUpdateForm.DescriptionInput
              product={product}
              form={form}
              label={true}
              onSuccess={(data) => {
                setProduct(data);
                toast.success({ message: "Item updated." });
              }}
              onError={(err) => {
                form.handleError(err);
                toast.error({ message: "Could not update item." });
              }}
            />
          </div>
        </AdminView.Section>

        <AdminView.Section title="Price"></AdminView.Section>
        <AdminView.Section title="Images"></AdminView.Section>

        <AdminView.Section title="Seo">
          <div className="mb-1">
            <Form.Label value="Title" className="mb-1" />
            <Form.TextInput
              name="title"
              onSave={handlePageUpdate}
              error={form.errors.name}
              placeholder="Give a name to the item"
              maxLength={99}
            />
          </div>
          <div className="mb-1">
            <ProductUpdateForm.SlugPublicInput
              product={product}
              form={form}
              onSuccess={(data) => {
                setProduct(data);
                toast.success({ message: "Item updated." });
              }}
              onError={(err) => {
                form.handleError(err);
                toast.error({ message: "Could not update item." });
              }}
            />
          </div>
        </AdminView.Section>
      </ProductUpdateForm>
    </AdminView>
  );
}
