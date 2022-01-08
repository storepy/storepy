import React, { useState } from "react";
import Form, { useForm } from "@miq/form";
import { IconButton, Icons } from "@miq/components";

//
// <br />
// (dans environ 2 mois).

const ERROR_MSG = {
  name_length: "Veuillez entrer votre nom et prénom.",
  number_length: "Nous ne pouvons pas vous contatcter sans votre numéro.",
  number_digit: "",
};

export default function ProductPreSaleForm(props) {
  const form = useForm({ name: "", number: "", email: "", ig_handle: "" });
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = form.values;
    if (!name || name.length < 4) return form.setErrors({ ...form.errors, name: ERROR_MSG.name_length });

    if (!number || number.length > 8) return form.setErrors({ ...form.errors, number: ERROR_MSG.number_length });

    if (form.hasErrors()) return;

    console.log(name, number);
  };

  const handleNumberChange = (e) => {
    const { valueAsNumber } = e.target;
    form.setValue("number", valueAsNumber);
  };

  return (
    <div className="">
      <p className="mb-3">Voulez-vous être contacté dès que ce produit sera disponible?</p>

      {!isOpen && (
        <div className="d-flex justify-content-center mb-3">
          <IconButton
            labelFirst
            label="Contactez-moi"
            onClick={() => setOpen(true)}
            Icon={Icons.Telephone}
            className="fw-bold btn-primary-3"
          />
        </div>
      )}

      {isOpen && (
        <div className="mb-3">
          <Form context={form} method="POST" onSubmit={handleSubmit}>
            <div className="mb-1">
              <Form.Label value="Nom et prénom" />
              <Form.TextInput required name="name" error={form.errors.name} maxLength={99} />
            </div>

            <div className="mb-1">
              <Form.Label value="Numéro de téléphone/whatsapp" />
              <Form.TextInput
                required
                name="number"
                value={form.values.numer}
                onChange={handleNumberChange}
                error={form.errors.number}
                // minLength={8}
                maxLength={16}
              />
            </div>
            <div className="mb-1">
              <Form.Label value="Adresse email (facultatif)" />
              <Form.TextInput name="email" type="email" minLength={4} />
            </div>
            <div className="mb-2">
              <Form.Label value="Instagram (facultatif)" />
              <Form.TextInput name="ig_handle" minLength={4} placeholder={`feminity`} />
            </div>

            <div className="mb-3">
              <Form.Submit value="Contactez-moi" className="btn btn-primary w-100" />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}