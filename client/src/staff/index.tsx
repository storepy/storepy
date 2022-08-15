import * as React from 'react';

import './index.scss';

import { Icons } from '@miq/componentjs';
import ShopStaffRoutes from '@shopy/storejs';
import SalesStaffRoutes from '@shopy/orderjs/';
import Staff, { AnalyticsStaffRoutes } from '@miq/staffjs';

import { PartnerStaffRoutes } from '../miqpartnersjs';

export default function StaffLayout() {
  return (
    <Staff.Layout
      links={[
        {
          href: 'analytics',
          label: 'Analytics',
          icon: <Icons.ChartBar />,
          element: <AnalyticsStaffRoutes />,
          mobile: true,
        },
        { href: 'sales', label: 'Sales', icon: <Icons.Coin />, element: <SalesStaffRoutes />, mobile: true },
        { href: 'store', label: 'Store', icon: <Icons.ShoppingCart />, element: <ShopStaffRoutes />, mobile: true },

        {
          href: 'partners',
          label: 'Partners',
          icon: <Icons.Affiliate />,
          element: <PartnerStaffRoutes />,
          mobile: true,
        },
        // { href: 'store/', label: '', icon: <Icons.Menu2 />, element: <ShopStaffRoutes />, mobile: true },
      ]}
    />
  );
}
