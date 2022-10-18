import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Staff from '@miq/staffjs';
import { ResultsResponse } from '@miq/hookjs';
import { Loading, Pagination } from '@miq/componentjs';

import type { TPartner } from './types';
import { usePartnerListRequest } from './utils';
import { PartnerListFilterForm } from './forms';

const AuditRoutes = React.lazy(() => import('./audit'));

const PartnerIndexView = () => {
  //   const [params]=useSearchParams();
  const { res, loading } = usePartnerListRequest();

  const r = new ResultsResponse<TPartner>(res);

  if (loading) return <Loading />;
  if (!r.isSuccess) return <div>Something went wrong</div>;

  return (
    <Staff.View
      title="Partners"
      actions={
        <div>
          <Staff.Link to="audit/" className="btn btn-primary-3">
            {` « Audit » `}
          </Staff.Link>
        </div>
      }
      footer={<Pagination {...r.pagination} component={Staff.Link} to className="" />}
    >
      <Staff.Section>
        <PartnerListFilterForm />
      </Staff.Section>

      <Staff.Section>
        {r.items?.map((p) => {
          const { extra = {}, slug } = p;
          return (
            <Staff.Section
              border
              title={`${p.first_name} ${p.last_name} - ${extra.age}yo (${extra.size?.toUpperCase()})`}
              actions={<div>{``}</div>}
              key={slug}
            >
              <ul className="text-sm">
                <li>
                  <a href={`https://instagram.com/${p.ig}/`} target="_blank" rel="noreferrer noopener">
                    {p.ig}
                  </a>
                  <a href={`/staff/partners/audit/?username=${p.ig}`} className="text-sm text-muted">
                    {` « audit » `}
                  </a>
                  {p.tt && (
                    <a
                      href={`https://tiktok.com/@${p.tt}/`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >{` | ${p.tt}`}</a>
                  )}
                </li>
                <li>
                  <span className="text-muted">{p.phone}</span>
                  <span>{p.email && ` | ${p.email}`}</span>
                </li>
                <li>
                  {extra?.wears_lingerie === 'oui' ? `Wears lingerie` : '-'}
                  {extra.is_newbie === 'oui' ? ` | Newbie` : ' | -'}
                </li>
                <li>{extra.interests?.map((i: any) => `${i} `)}</li>
              </ul>
            </Staff.Section>
          );
        })}
      </Staff.Section>
    </Staff.View>
  );
};

export const PartnerStaffRoutes = () => {
  return (
    <Staff.View>
      <Routes>
        <Route path="audit/*" element={<AuditRoutes />} />
        <Route index element={<PartnerIndexView />} />
      </Routes>
    </Staff.View>
  );
};
