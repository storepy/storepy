import React, { useContext, useEffect } from "react";
import { SharedDataCtx } from "@miq/contexts";
import { ImgsHorizontalGallery } from "@miq/components";

import { ProductPriceDisplay, BreadCrumbs } from "./components";
import ProductPreSaleForm from "./ProductPreSaleForm";

export const ContactNavLink = (props) => {
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
      <div className="my-3 px-2">
        <BreadCrumbs />
      </div>

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

            {/* {product?.is_pre_sale ? <ProductPreSaleForm product={product} /> : <ContactNavLink />} */}
            {product?.is_pre_sale && <ProductPreSaleForm product={product} />}

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
                {/* <a href="." className="text-underline">
                  Consultez notre page Livraison
                </a> */}
              </li>
            </ul>

            {/* <div className="mb-3">
              <div className="text-md">Porter avec</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="p-2">
        <p className="text-md">Voir les styles semblables</p>
      </div> */}
    </div>
  );
}
