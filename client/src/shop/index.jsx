import React from 'react';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { AdminRoute, AdminNavLink, AdminView } from '@miq/adminjs';
import { addForwardSlash } from '@miq/utils';
import { ToastProvider, useToast, Loading } from '@miq/components';
import { SHOP_PATHS } from './constants';

const ProductStaffRoutes = lazy(() => import('./product/'));
const CategoryStaffRoutes = lazy(() => import('./category/'));
const SupplierOrderStaffRoutes = lazy(() => import('./orders/'));

export default function StaffShopRoutes(props) {
  const toastCtx = useToast();
  const { path, url } = props.match;

  return (
    <ToastProvider context={toastCtx}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <AdminRoute
            path={`${SHOP_PATHS.orderList()}`}
            render={(props) => <SupplierOrderStaffRoutes back={addForwardSlash(url)} {...props} />}
            requiredPerms={['shop.view_supplierorder']}
          />
          <AdminRoute
            path={`${SHOP_PATHS.categoryList()}`}
            render={(props) => <CategoryStaffRoutes back={addForwardSlash(url)} {...props} />}
            requiredPerms={['shop.view_category']}
          />
          <AdminRoute
            path={`${SHOP_PATHS.productList()}`}
            render={(props) => <ProductStaffRoutes back={addForwardSlash(url)} {...props} />}
            requiredPerms={['shop.view_product']}
          />
          <AdminRoute path={path} requiredPerms={['shop.view_product']}>
            <AdminView title="Store" back={'/staff/'} className="miq-container-fluid">
              <AdminView.Section
                title="Carts"
                actions={
                  <AdminNavLink
                    to={addForwardSlash(`${path}carts`)}
                    label="View carts"
                    requiredPerms={['shop.view_cart']}
                    className="btn-primary-3"
                  />
                }
              ></AdminView.Section>

              <AdminView.Section
                title="Supplier Orders"
                actions={
                  <AdminNavLink
                    to={addForwardSlash(`${path}orders`)}
                    label="View orders"
                    requiredPerms={['shop.view_supplierorder']}
                    className="btn-primary-3"
                  />
                }
              ></AdminView.Section>

              <AdminView.Section
                title="Products"
                actions={
                  <AdminNavLink
                    to={addForwardSlash(`${path}products`)}
                    label="View products"
                    requiredPerms={['shop.view_product']}
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
                    requiredPerms={['shop.view_category']}
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
