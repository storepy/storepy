import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { ToastProvider, useToast, Loading } from "@miq/components";
import ProductDetailView from "./DetailView";
import IndexView from "./IndexView";

export default function PublicShopRoutes(props) {
  const toastCtx = useToast();
  // const { path } = props.match;

  return (
    <ToastProvider context={toastCtx}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/shop/:catSlug/:prodPublicSlug/" component={ProductDetailView} />
          <Route path="/" component={IndexView} />
        </Switch>
      </Suspense>
    </ToastProvider>
  );
}
