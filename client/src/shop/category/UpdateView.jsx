import { useContext, useEffect, useState } from "react";

import { AdminView, StaffCoverUpdateForm, PublishedStatusSpan } from "@miq/adminjs";
import Form, { useForm } from "@miq/form";
import {
  // Icons,
  // IconNavLink,
  ToastCtx,
  ImgSquare,
  // IconButton,
  ImgDeleteIconButton,
} from "@miq/components";

import { catServices } from "./utils";
import { CatNameInput } from "./components";

export default function StaffCategoryUpdateView(props) {
  const { catSlug } = props.match.params;

  const [cat, setCat] = useState(null);
  const toast = useContext(ToastCtx);

  const form = useForm({ name: "", description: "", title: "", slug_public: "", is_published: false });
  const { setValues } = form;

  useEffect(() => {
    catServices
      .detail(catSlug)
      .then((data) => {
        setCat(data);

        setValues({
          name: data.name || "",
          description: data.description || "",
          title: data.page.title || "",
          slug_public: data?.page?.slug_public || "",
          is_published: data?.is_published || false,
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
  }, [catSlug, setValues]);

  if (!cat) return null;

  const handleUpdate = (e) => {
    e.preventDefault();
    catServices
      .patch(cat.slug, { name: form.values.name, description: form.values.description })
      .then((data) => {})
      .catch((err) => {
        form.handleError(err);
      });
  };

  return (
    <AdminView back={props?.back} title="Modifier une catégorie" className="cat-update-view">
      <div className="view-header d-flex flex-column flex-md-row mb-2">
        <div className="mb-2 w-md-25">
          <StaffCoverUpdateForm
            slug={cat?.cover}
            data={cat.cover_data}
            onCreate={(imgData) => {
              catServices
                .patch(cat.slug, { cover: imgData.slug })
                .then((data) => {
                  setCat(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            onUpdate={(cover_data) => {
              return setCat({ ...cat, cover_data });
            }}
            onDelete={() => {
              return setCat({ ...cat, cover_data: null, cover: null });
            }}
          />
        </div>
        <div className="ms-1 ms-md-2 flex-1">
          <AdminView.Section
            title="Details"
            actions={<PublishedStatusSpan is_published={cat?.page?.is_published} pill />}
          >
            <Form context={form} onSubmit={handleUpdate}>
              <div className="mb-1">
                <Form.Label value="Nom de la catégorie" className="mb-1" />
                <CatNameInput error={form.errors.name} />
              </div>

              <div className="mb-1">
                <Form.Label value="Description de la catégorie" className="mb-1" />
                <Form.TextAreaX
                  name="description"
                  error={form.errors.description}
                  placeholder={"Decrivez la catégorie ..."}
                />
              </div>

              <div className="my-2">
                <Form.Submit value="Sauvegarder" className="btn btn-primary" />
              </div>
            </Form>
          </AdminView.Section>
        </div>
      </div>

      <Form
        context={form}
        onSubmit={(e) => {
          e.preventDefault();
          const { title, slug_public, is_published } = form.values;
          return catServices
            .patchPage(
              catSlug,
              { title, slug_public, is_published },
              { title: cat.page.title, slug_public: cat.page.slug_public, is_published: cat.page.is_published }
            )
            .then((data) => {
              // setCat(data);
              toast.success({ message: "Category updated." });
            })
            .catch((err) => {
              form.handleError(err);
              toast.error({ message: "Could not update item." });
            });
        }}
      >
        <AdminView.Section title="Seo">
          <div className="mb-1">
            <Form.Label value="Title" className="mb-1" />
            <Form.TextInput
              required
              name="title"
              error={form.errors.title}
              placeholder="Give a name to the item"
              maxLength={99}
            />
          </div>
          <div className="mb-1">
            <Form.Label value="Slug" className="mb-1" />
            <Form.TextInput
              required
              name="slug_public"
              error={form.errors.slug_public}
              placeholder={"Write slug ..."}
              maxLength={99}
            />
          </div>
        </AdminView.Section>

        <AdminView.Section title="Status">
          <div className="d-flex align-items-center">
            <Form.CheckboxInput name="is_published" error={form.errors.is_published} className="me-2" />
            <Form.Label value="Publier cette categorie" />
          </div>
        </AdminView.Section>

        <div className="">
          <Form.Submit value="Save" className="btn btn-primary-3" />
        </div>
      </Form>
    </AdminView>
  );
}
