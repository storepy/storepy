import Form from "@miq/form";

export const CatNameInput = (props) => (
  <Form.TextInput placeholder="Entrez le nom de la catégorie ..." maxLength={99} {...props} required name="name" />
);
