import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import { AdminRoute } from "@miq/adminjs";

import "./product.scss";

const ProductListView = lazy(() => import("./ListView"));
const ProductUpdateView = lazy(() => import("./UpdateView"));

export default function StaffProductRoutes(props) {
  const { path } = props.match;

  return (
    <Switch>
      <AdminRoute path={`${path}:prodSlug/`} component={ProductUpdateView} requiredPerms={["shop.change_product"]} />
      <AdminRoute component={ProductListView} requiredPerms={["shop.view_product"]} />
    </Switch>
  );
}
