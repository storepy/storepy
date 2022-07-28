import * as React from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import Staff from '@miq/staffjs';
import { Response } from '@miq/utiljs';
import { Loading, Pagination } from '@miq/componentjs';

import { TPartner } from './types';
import { usePartnerListRequest } from './utils';
import { PartnerListFilterForm } from './forms';

const PartnerIndexView = () => {
  //   const [params]=useSearchParams();
  const { res, loading } = usePartnerListRequest();

  const r = new Response<TPartner>(res);

  if (loading) return <Loading />;
  if (!r.isSuccess) return <div>Something went wrong</div>;

  return (
    <Staff.View
      title="Partners"
      actions={<div>{r.data.count}</div>}
      footer={<Pagination {...r.data} component={Staff.Link} to className="" />}
    >
      <Staff.Section>
        <PartnerListFilterForm />
      </Staff.Section>

      <Staff.Section>
        {r.items?.map((p) => {
          const { extra = {} } = p;
          return (
            <Staff.Section
              border
              title={<div className="">{`${p.first_name} ${p.last_name}`}</div>}
              actions={
                <div>
                  {extra.age} {extra.size?.toUpperCase()}
                </div>
              }
              key={p.slug}
            >
              <ul className="text-muted text-sm">
                <li>
                  <a href={`https://instagram.com/${p.ig}/`} target="_blank" rel="noreferrer noopener">
                    {p.ig}
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
                  <span>{p.phone}</span>
                  <span>{p.email && ` | ${p.email}`}</span>
                </li>
                <li>
                  {extra?.wears_lingerie === 'oui' ? `Wears lingerie` : '-'}
                  {extra.is_newbie === 'oui' && ` | Newbie`}
                </li>
                <li>{extra.interests?.map((i) => `${i} `)}</li>
              </ul>
            </Staff.Section>
          );
        })}
      </Staff.Section>
    </Staff.View>
  );
};

export const PartnerRoutes = () => {
  return (
    <Staff.View>
      <Routes>
        <Route index element={<PartnerIndexView />} />
      </Routes>
    </Staff.View>
  );
};
