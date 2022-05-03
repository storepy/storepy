import * as React from 'react';

import './index.scss';

import Staff from '@miq/staffjs';
import { Icons } from '@miq/componentjs';
import ShopStaffRoutes from '@shopy/storejs';

// const OrdersStaffRoutes = React.lazy(() => import('../orders/staff'));
const FinanceRoutes = React.lazy(() => import('./finance'));

export default function StaffLayout() {
  return (
    <Staff.Layout
      links={[
        { href: 'store/', label: 'Store', icon: <Icons.Shop />, element: <ShopStaffRoutes />, mobile: true },
        { href: 'finance/', label: 'Finance', icon: <Icons.CashStack />, element: <FinanceRoutes /> },
      ]}
    />
  );
}
