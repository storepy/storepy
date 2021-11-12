import React from "react";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import { AdminRoute } from "@miq/adminjs";
import { ToastProvider, useToast, Loading } from "@miq/components";

const StaffShopIndexView = lazy(() => import("./IndexView"));
const StaffProductRoutes = lazy(() => import("./product/"));

export default function StaffShopRoutes(props) {
  const toastCtx = useToast();
  const { path } = props.match;

  return (
    <ToastProvider context={toastCtx}>
      <Suspense fallback={<Loading />}>
        <Switch>
          {/* <AdminRoute
            path={`${path}settings/`}
            component={DocumentSettingsView}
            requiredPerms={
              [
                // 'miq_dms.view_document'
              ]
            }
          /> */}
          {/* <AdminRoute
            path={`${path}:docSlug/view/`}
            component={DocumentReadOnlyView}
            requiredPerms={["miq_dms.view_document"]}
          />
          <AdminRoute
            path={`${path}:docSlug/share/`}
            component={DocumentShareView}
            requiredPerms={["miq_dms.change_document"]}
          />*/}
          {/* <AdminRoute
            path={`${path}:prodSlug/`}
            component={DocumentUpdateView}
            requiredPerms={["miq_dms.change_document"]}
          />  */}
          <AdminRoute path={`${path}products/`} component={StaffProductRoutes} requiredPerms={["shop.view_product"]} />
          <AdminRoute path={path} component={StaffShopIndexView} requiredPerms={["shop.view_product"]} />
        </Switch>
      </Suspense>
    </ToastProvider>
  );
}
