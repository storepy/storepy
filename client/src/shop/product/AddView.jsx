import { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { AdminView } from "@miq/adminjs";

import Form, { useForm } from "@miq/form";
import { addForwardSlash } from "@miq/utils";

import { productServices } from "./utils";
import { ProductNameInput } from "./components";

const ExternalUrlForm = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  const form = useForm({ url: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    productServices
      .getSheinProductData({ url: form.values.url })
      .then((data) => {
        setLoading(false);
        form.setValue("url", "");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Form context={form} onSubmit={handleSubmit} className="my-3">
      {isLoading && <div className="my-3">Getting product data. Please wait ...</div>}
      <div className="d-flex flex-column flex-md-row">
        <Form.TextInput
          required
          name="url"
          type="url"
          placeholder="Add source url ..."
          className="me-1"
          disabled={isLoading}
        />
        <Form.Submit value="Get data" className="btn btn-primary-3" disabled={isLoading} />
      </div>
    </Form>
  );
};

export default function StaffProductAddView(props) {
  const form = useForm({ name: "", img: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    return productServices
      .post({ name: form.values.name })
      .then(({ slug }) => {
        if (!slug) return;

        props.history.push(`${props.match.url.replace("new/", `${slug}/`)}`);
      })
      .catch((err) => {
        form.handleError(err);
      });
  };

  return (
    <AdminView title="Add a new product" back={props?.back} className="product-add-view">
      <AdminView.TabNavLinks
        urls={[
          { exact: true, to: addForwardSlash(props.match.url), label: "Product info" },
          { to: `${addForwardSlash(props.match.url)}source/`, label: "Add from source" },
        ]}
        className="my-2"
      />

      <ExternalUrlForm productForm={form} />

      <Form context={form} onSubmit={handleSubmit}>
        <AdminView.Section>
          <div className="mb-2">
            <ProductNameInput required form={form} placeholder={"Give a name to the new item ..."} />
          </div>
        </AdminView.Section>

        <Form.Submit value="Add new product" className="btn btn-primary" />
      </Form>
    </AdminView>
  );
}
