import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import './index.scss';

import { Loading } from '@miq/componentjs';
import PartnerRoutes from './miqpartnersjs';
import { SharedDataProvider } from '@miq/contextjs';
import { LIBCreateView } from '@shopy/shopjs';
import { DOMAIN, IS_DEV } from '@miq/utiljs';

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

const Beacon = () => {
  const { key } = useLocation();
  // console.log('Beac');

  React.useEffect(() => {
    const data = new FormData();

    // const cookies = document.cookie;
    // if (!cookies || cookies === '') return;

    // let token = cookies.split(';').find((i) => i.includes('csrftoken'));
    // if (token) token = token.split('=')[1];

    // if (!token || token === '') return;

    // data.append('csrfmiddlewaretoken', token);

    // console.log('BeacFX', token);

    // console.log(navigator);

    // data.append('ua', navigator.userAgent);
    // data.append('url', window.location.href);

    navigator.sendBeacon(`${DOMAIN}/beat/`, data);
  }, [key]);
  return null;
};

if (root)
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Beacon />
      </BrowserRouter>
    </React.StrictMode>,
    root
  );
