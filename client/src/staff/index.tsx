import * as React from 'react';
import { Route } from 'react-router-dom';

import './index.scss';

import Staff from '@miq/staffjs';
import { Icons } from '@miq/componentjs';
import ShopStaffRoutes from '@shopy/storejs';

// const OrdersStaffRoutes = React.lazy(() => import('../orders/staff'));

const SocialStaffRoutes = React.lazy(() => import('@miq/socialjs'));

export default function StaffLayout() {
  return (
    <Staff.Layout
      sidebar={
        <>
          <Staff.NavLink to="orders/">
            <Icons.Shop />
            <span className="label">Orders</span>
          </Staff.NavLink>
          <Staff.NavLink to="store/">
            <Icons.Shop />
            <span className="label">Store</span>
          </Staff.NavLink>
          <Staff.NavLink to="social/">
            <Icons.At />
            <span className="label">Social</span>
          </Staff.NavLink>
        </>
      }
      mobileNav={
        <>
          <Staff.NavLink to="shop">
            <Icons.Shop />
            <span className="label">Shop</span>
          </Staff.NavLink>
          <Staff.NavLink to="social">
            <Icons.At />
            <span className="label">Social</span>
          </Staff.NavLink>
        </>
      }
    >
      <Route path="social/*" element={<SocialStaffRoutes />} />

      {/* <Route path="orders/*" element={<OrdersStaffRoutes />} /> */}
      <Route path="store/*" element={<ShopStaffRoutes />} />
    </Staff.Layout>
  );
}
