import * as React from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import { Loading } from '@miq/componentjs';
import { useRequest } from '@miq/hookjs';
import Staff, { API } from '@miq/staffjs';

import Usr from './usr';
import { Profile } from './profile';

const IndexView = () => {
  const [params] = useSearchParams();
  const username = params.get('username') || '';
  const back = params.get('back') || undefined;
  const [usn, setUsn] = React.useState<string>(username);

  const { res, loading } = useRequest(
    () => {
      if (!username) return null;
      return API.get(`partners/audit/`, { params: { username }, timeout: 10000 });
    },
    { refreshDeps: [username] }
  );

  const usr = new Usr(res?.data);

  console.log(usr?.cached);

  return (
    <Staff.View back={back}>
      <Staff.Section
        title={
          <form method="GET">
            <input
              required
              name="username"
              value={usn}
              onChange={({ target }) => setUsn(target.value)}
              placeholder="Enter username to audit ..."
              className="miq-form-input"
            />
          </form>
        }
      >
        {loading ? (
          <Loading />
        ) : username && !usr.isValid ? (
          <>
            <div className="">
              <div className="text-md">This username is invalid</div>
            </div>
          </>
        ) : (
          username && <Profile usr={usr} />
        )}
      </Staff.Section>
    </Staff.View>
  );
};

export default function AuditRoutes() {
  return (
    <Staff.View title="Account audit" back="/staff/partners/">
      <Routes>
        <Route path="/*" element={<IndexView />} />
      </Routes>
    </Staff.View>
  );
}
