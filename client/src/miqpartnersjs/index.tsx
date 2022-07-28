import * as React from 'react';

import { Routes, Route } from 'react-router-dom';
import { PartnerOnboardView } from './views.public';

export default function PartnerRoutes() {
  return (
    <Routes>
      <Route path="jobs/ambassadors/" element={<PartnerOnboardView />} />
    </Routes>
  );
}

export { PartnerRoutes } from './views.staff';
