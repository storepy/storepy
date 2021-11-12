import React from "react";
import { useCallback, useContext, useEffect, useState } from "react";
// import { debounce } from "@miq/utils";

// import { SharedDataCtx } from "@miq/contexts";
import { useForm } from "@miq/form";
import { AdminView } from "@miq/adminjs";
import { Button, ImgDeleteIconButton, ToastCtx, ImgSquare, Img } from "@miq/components";
import {
  ProductDescriptionInput,
  ProductCoverUploadButton,
  ProductTable,
  ProductUpdateForm,
  ProductImageUploadButton,
  ProductCreateForm,
  ProductImageAltTextInput,
} from "./components";
import { productServices } from "./utils";

const ProductTabDisplay = (props) => {
  const { product, form, tab, onProductUpdate } = props;

  switch (tab) {
    case "price":
      return <AdminView.Section title={form.values.name} text="Upload your item's price"></AdminView.Section>;

    case "imgs":
      const { cover_data, cover } = product;
      return (
        <AdminView.Section
          title={form.values.name}
          text="Upload your item's images"
          actions={<ProductImageUploadButton product={product} onCreateSuccess={(data) => onProductUpdate(data)} />}
          className="product-item-images"
        >
          {cover && (
            <div className="img-item mb-1">
              <Img {...cover_data} className="product-cover me-1" />

              <div className="flex-1">
                <div className="mb-1">
                  <ProductImageAltTextInput
                    image={cover_data}
                    onSuccess={({ isUpdated, ...imgData }) =>
                      onProductUpdate({ ...product, cover_data: imgData, cover: imgData.slug })
                    }
                  />
                </div>
                <ImgDeleteIconButton
                  label="Delete cover"
                  className="btn-danger-3"
                  slug={cover_data.slug}
                  onSuccess={() => onProductUpdate({ ...product, cover_data: null, cover: null })}
                />
              </div>
            </div>
          )}

          {product.images_data.map((img) => (
            <div className="img-item mb-1" key={img.slug}>
              <Img {...img} className="product-img" />
              <div className="flex-1">
                <div className="mb-1">
                  <ProductImageAltTextInput image={img} />
                </div>

                <ImgDeleteIconButton
                  slug={img.slug}
                  className="btn-danger-3"
                  onSuccess={() =>
                    onProductUpdate({
                      ...product,
                      images_data: product.images_data.filter((i) => i.slug !== img.slug),
                      images: product.images.filter((i) => i !== img.slug),
                    })
                  }
                />
              </div>
            </div>
          ))}

          <div className="d-grid grid-2 grid-md-3 grid-lg-4 mt-4">
            {product.images_data.map((img) => (
              <div className="img-grid-item" key={img.slug}>
                <div className="img-grid-item-content">
                  <ImgSquare {...img} className="product-img" />
                </div>
              </div>
            ))}
          </div>
        </AdminView.Section>
      );

    case "desc":
      return (
        <AdminView.Section title={form.values.name} text="Update your item's description">
          <ProductDescriptionInput
            product={product}
            form={form}
            onSuccess={(data) => {
              // setProduct(data);
              // toast.success({ message: "Item updated." });
            }}
            onError={(err) => {
              form.handleError(err);
              // toast.error({ message: "Could not update item." });
            }}
          />
        </AdminView.Section>
      );

    case "vars":
      return <AdminView.Section title={form.values.name} text="Upload your item's variants"></AdminView.Section>;

    default:
      return (
        <AdminView.Section title={form.values.name} text={`/${product.slug_public}`}>
          <div className="d-flex">
            <div className="me-1">
              <ProductCoverUploadButton
                product={product}
                onCreateSuccess={(data) => {
                  onProductUpdate(data);
                }}
                onCreateError={() => {}}
                onUpdateSuccess={(imgData) => {
                  onProductUpdate({ ...product, cover: imgData.slug, cover_data: imgData });
                }}
                onUpdateError={() => {}}
              >
                <ImgSquare {...product.cover_data} className="product-cover" />
              </ProductCoverUploadButton>
            </div>
            <div className="flex-1">
              <ProductUpdateForm.NameInput
                product={product}
                form={form}
                onSuccess={(data) => {
                  // setProduct(data);
                  // toast.success({ message: "Item updated." });
                }}
                onError={(err) => {
                  form.handleError(err);
                  // toast.error({ message: "Could not update item." });
                }}
              />
            </div>
          </div>
        </AdminView.Section>
      );
  }
};

const ProductItem = ({ product, ...props }) => {
  const [tab, setTab] = useState("product");
  const form = useForm({
    name: product.name || "",
    description: product.description || "",
    slug_public: product.slug_public || "",
    is_published: product.page.is_published || false,
    title: "",
  });

  if (!product || !product.slug) return null;

  return (
    <div className="product-item border-1 rounded">
      <ProductUpdateForm form={form} product={product}>
        <div className="d-flex align-items-center justify-content-between p-1 border-bottom">
          <div className="product-item-nav">
            <Button onClick={() => setTab("product")}>Info</Button>
            <Button onClick={() => setTab("desc")}>Description</Button>
            <Button onClick={() => setTab("price")}>Price</Button>
            <Button onClick={() => setTab("vars")}>Variants</Button>
            <Button onClick={() => setTab("imgs")}>Images</Button>
          </div>

          <div className="">
            {form.values.is_published ? (
              <span className="text-green-600">Published</span>
            ) : (
              <span className="text-muted">Draft</span>
            )}
          </div>
        </div>

        <div className="p-1">
          <ProductTabDisplay {...props} product={product} tab={tab} form={form} />
        </div>
      </ProductUpdateForm>
    </div>
  );
};

const ProductList = (props) => {
  const { data = { results: [] }, ...rest } = props;
  return (
    <div className="product-list">
      {data.results.map((item) => (
        <ProductItem {...rest} product={item} key={item.slug} />
      ))}
    </div>
  );
};

export default function ProductListView(props) {
  const [isAdding, setAdding] = useState(false);
  const [data, setData] = useState({ results: [] });
  const toasts = useContext(ToastCtx);

  const { search } = props.location;
  const getProducts = useCallback((...params) => productServices.list(...params), []);
  //   const push = useRef(debounce((url) => props.history.push(url), 300));

  useEffect(() => {
    let params = new URLSearchParams(search);
    if (![...params.values()].filter((i) => i).length) {
      params = null;
    }

    getProducts(params)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        toasts.error({ message: "Something went wrong" });
      });
  }, [getProducts, search, toasts]);

  const handleProductUpdate = (prodData) => {
    setData({
      ...data,
      results: data.results.map((i) => {
        if (i.slug === prodData.slug) return prodData;
        return i;
      }),
    });
  };

  return (
    <AdminView
      title="Products"
      actions={
        <Button onClick={() => setAdding(!isAdding)} className="btn-primary">
          Add product
        </Button>
      }
    >
      {isAdding && (
        <AdminView.Section title="Add a new product">
          <ProductCreateForm
            className="mb-3"
            onSuccess={(newData) => {
              setAdding(false);
              return setData({ ...data, results: [newData, ...data.results] });
            }}
          />
        </AdminView.Section>
      )}

      <ProductList data={data} setData={setData} toasts={toasts} onProductUpdate={handleProductUpdate} />
      <ProductTable data={data} setData={setData} toasts={toasts} />
    </AdminView>
  );
}
