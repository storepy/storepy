import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import reportWebVitals from "./reportWebVitals";

import { Loading } from '@miq/componentjs';
import { SharedDataProvider } from '@miq/contextjs';

import './index.scss';

const StaffLayout = React.lazy(() => import('./staff'));
// const OrdersPublicRoutes = React.lazy(() => import('./orders'));
const ShopPublicRoutes = React.lazy(() => import('./shop'));

const App = () => {
  const { pathname } = useLocation();

  return (
    <React.Suspense fallback={<Loading />}>
      <SharedDataProvider path={pathname}>
        <Routes>
          <Route path="staff/*" element={<StaffLayout />} />

          <Route
            path="/*"
            element={
              <Routes>
                <Route path="shop/*" element={<ShopPublicRoutes />} />
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

// reportWebVitals();
