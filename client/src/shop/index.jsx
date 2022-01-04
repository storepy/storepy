import React from "react";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import { AdminRoute, AdminNavLink, AdminView } from "@miq/adminjs";
import { addForwardSlash } from "@miq/utils";
import { ToastProvider, useToast, Loading } from "@miq/components";

const StaffProductRoutes = lazy(() => import("./product/"));
const StaffCategoryRoutes = lazy(() => import("./category/"));

export default function StaffShopRoutes(props) {
  const toastCtx = useToast();
  const { path, url } = props.match;

  return (
    <ToastProvider context={toastCtx}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <AdminRoute
            path={`${path}categories/`}
            render={(props) => <StaffCategoryRoutes back={addForwardSlash(url)} {...props} />}
            requiredPerms={["shop.view_category"]}
          />
          <AdminRoute
            path={`${path}products/`}
            render={(props) => <StaffProductRoutes back={addForwardSlash(url)} {...props} />}
            requiredPerms={["shop.view_product"]}
          />
          <AdminRoute path={path} requiredPerms={["shop.view_product"]}>
            <AdminView title="Store" back={"/staff/"}>
              <AdminView.Section
                title="Products"
                actions={
                  <AdminNavLink
                    to={addForwardSlash(`${path}products`)}
                    label="View products"
                    requiredPerms={["shop.view_product"]}
                    className="btn-primary-3"
                  />
                }
              ></AdminView.Section>

              <AdminView.Section
                title="Categories"
                actions={
                  <AdminNavLink
                    to={addForwardSlash(`${path}categories`)}
                    label="View categories"
                    requiredPerms={["shop.view_category"]}
                    className="btn-primary-3"
                  />
                }
              ></AdminView.Section>
            </AdminView>
          </AdminRoute>
        </Switch>
      </Suspense>
    </ToastProvider>
  );
}
