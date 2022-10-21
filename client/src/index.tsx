import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';

import { Loading } from '@miq/componentjs';
import PartnerRoutes from './miqpartnersjs';
import { SharedDataProvider } from '@miq/contextjs';
import { LIBCreateView } from '@shopy/shopjs';

const StaffLayout = React.lazy(() => import('./staff'));
const ShopPublicRoutes = React.lazy(() => import('./shop'));

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <SharedDataProvider path={window.location.pathname}>
        <Routes>
          <Route path="staff/*" element={<StaffLayout />} />

          <Route
            path="/*"
            element={
              <Routes>
                <Route path="shop/*" element={<ShopPublicRoutes />} />
                <Route path="p/:libName/" element={<LIBCreateView />} />
                <Route path="/*" element={<PartnerRoutes />} />
              </Routes>
            }
          />
        </Routes>
      </SharedDataProvider>
    </React.Suspense>
  );
};

const root = document.getElementById('root');

if (root)
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    root
  );
