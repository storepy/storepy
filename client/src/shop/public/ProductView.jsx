import React, { useContext, useEffect, useState } from "react";
import { SharedDataCtx } from "@miq/contexts";
import Form, { useForm } from "@miq/form";
import { IconButton, Icons, ImgsHorizontalGallery } from "@miq/components";

import { ProductPriceDisplay } from "./components";

const CategoriesNavbar = (props) => {
  return (
    <div className="cat-navbar">Soldes Nouveautés Vêtements En vedette Marques The Super Puff Vestes et manteaux</div>
  );
};

const PreSaleForm = (props) => {
  const form = useForm({ name: "", number: "", email: "", ig: "" });
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="">
      <p className="mb-3">
        Voulez-vous être contacté dès que ce produit est disponible?
        <br />
        (dans environ 2 mois).
      </p>

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
          <Form context={form} method="POST">
            <div className="mb-1">
              <Form.Label value="Nom et prénom" />
              <Form.TextInput required name="name" minLength={3} />
            </div>
            <div className="mb-1">
              <Form.Label value="Numéro de téléphone/whatsapp" />
              <Form.TextInput
                required
                name="number"
                isValid={({ value }) => {
                  if (!value) {
                    form.setErrors({ ...form.errors, number: "Empty value" });
                    return false;
                  }
                  console.log("valid", value);
                  return true;
                }}
                error={form.errors.number}
                minLength={8}
              />
            </div>
            <div className="mb-1">
              <Form.Label value="Adresse email (facultatif)" />
              <Form.TextInput name="email" type="email" minLength={4} />
            </div>
            <div className="mb-2">
              <Form.Label value="Instagram (facultatif)" />
              <Form.TextInput name="ig" minLength={4} placeholder={`feminity`} />
            </div>

            <div className="mb-3">
              <Form.Submit value="Contactez-moi" className="btn btn-primary w-100" />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

const ContactNavLink = (props) => {
  return (
    <div className="my-3">
      <a href="/" target="_blank" className="btn btn-primary">
        Contactez nous
      </a>
    </div>
  );
};

export default function ProductPublicView(props) {
  const { product } = useContext(SharedDataCtx);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   (pos) => {
    //     console.log(pos);
    //   },
    //   (err) => console.warn("permission was rejected", err)
    // );
  }, []);

  if (!product) return null;

  return (
    <div className="product-view" id="ProductView">
      <CategoriesNavbar />

      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="w-100 w-md-65">
          <div className="">
            <ImgsHorizontalGallery images={[product.cover, ...product?.images]} mobileOnly />
          </div>
        </div>
        <div className="w-100 w-md-35 p-1">
          <div style={{ position: "sticky", top: 0 }}>
            <h1 className="text-md fw-lighter">{product.name}</h1>
            <ProductPriceDisplay product={product} />

            {product?.is_pre_sale ? <PreSaleForm product={product} /> : <ContactNavLink />}

            {product.description && (
              <div className="product-info-meta mb-3" style={{ whiteSpace: "pre-wrap" }}>
                {product.description}
              </div>
            )}

            <ul className="mb-3">
              {product?.has_attributes && <li className="fw-bold mb-1">Détails</li>}
              {product?.attributes && (
                <li className="mb-2">
                  <ul className="">
                    {product?.attributes?.map((attr) => {
                      return (
                        <li key={attr.name}>
                          <span>{attr.name} : </span>
                          <span>{attr.value}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}

              <li className="fw-bold">Livraison</li>
              <li className="mb-2">
                <p className="mb-2">
                  Livraison standard gratuite sur Cotonou pour les commandes de 50000 CFA et plus.
                  <br />
                  Le délai de traitement de la livraison standard pour cet article est estimé à 1 à 5 jours ouvrables.
                </p>
                <a href="" className="text-underline">
                  Consultez notre page Livraison
                </a>
              </li>
            </ul>

            <div className="mb-3">
              <div className="text-md">Porter avec</div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-md">Voir les styles semblables</p>
      </div>
    </div>
  );
}
