import * as React from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import { Loading } from '@miq/componentjs';
import { useRequest } from '@miq/hookjs';
import Staff, { API } from '@miq/staffjs';

import lang from './index.lang';

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
      return API.get(`partners/audit/`, { params: { username }, timeout: 15000 });
    },
    { refreshDeps: [username] }
  );

  const usr = new Usr(res?.data);

  return (
    <Staff.View back={back}>
      <Staff.Section
        header={
          <form method="GET" className="miq-container center mb-3">
            <input
              required
              name="username"
              value={usn}
              onChange={({ target }) => setUsn(target.value)}
              placeholder={window.i18n(lang, 'IndexView.usernameInput.placeholder')}
              className="miq-form-input"
              minLength={2}
              maxLength={99}
            />
          </form>
        }
      >
        <div className="miq-container center">
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
        </div>
      </Staff.Section>
    </Staff.View>
  );
};

export default function AuditRoutes() {
  return (
    <Staff.View title={window.i18n(lang, 'AuditRoutes.viewTitle')} back="/staff/partners/">
      <Routes>
        <Route path="/*" element={<IndexView />} />
      </Routes>
    </Staff.View>
  );
}
