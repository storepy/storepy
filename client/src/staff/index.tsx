import * as React from 'react';

import './index.scss';

import Staff, { AnalyticsRoutes } from '@miq/staffjs';
import { Icons } from '@miq/componentjs';
import ShopStaffRoutes from '@shopy/storejs';
import SalesStaffRoutes from '@shopy/orderjs/';
import { PartnerRoutes } from '../miqpartnersjs';

// const OrdersStaffRoutes = React.lazy(() => import('../orders/staff'));
// const FinanceRoutes = React.lazy(() => import('./finance'));

export default function StaffLayout() {
  return (
    <Staff.Layout
      links={[
        {
          href: 'analytics/',
          label: 'Analytics',
          icon: <Icons.GraphUpArrow />,
          element: <AnalyticsRoutes />,
          mobile: true,
        },
        { href: 'sales/', label: 'Sales', icon: <Icons.CashStack />, element: <SalesStaffRoutes />, mobile: true },
        { href: 'store/', label: 'Store', icon: <Icons.Shop />, element: <ShopStaffRoutes />, mobile: true },
        {
          href: 'partners/',
          label: 'Partners',
          icon: <Icons.PersonBadge />,
          element: <PartnerRoutes />,
          mobile: true,
        },
      ]}
    />
  );
}
