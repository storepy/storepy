import React from "react";
import { useCallback, useContext, useEffect, useState } from "react";
// import { debounce } from "@miq/utils";

import { AdminView } from "@miq/adminjs";
import { ToastCtx } from "@miq/components";
import { ProductTable } from "./components";
import { productServices } from "./utils";

export default function ProductTableView(props) {
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
  }, [getProducts, search]);

  return (
    <AdminView title="Products">
      <ProductTable data={data} setData={setData} toasts={toasts} />
    </AdminView>
  );
}
