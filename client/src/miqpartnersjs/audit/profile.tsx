import * as React from 'react';

import Staff from '@miq/staffjs';

import Usr, { Post } from './usr';
import { truncateStr, uuid } from '@miq/utiljs';

type TProfileProps = { usr: Usr };

export const Profile = ({ usr }: TProfileProps) => {
  return (
    <div className="d-grid grid-md-2 gap-2">
      <Info usr={usr} />

      <Locations usr={usr} />
      <Hashtags usr={usr} />
      <TaggedUser usr={usr} />
      <Schedule usr={usr} />
    </div>
  );
};

const Info = ({ usr }: TProfileProps) => {
  return (
    <>
      <div className="mt-2">
        <div className="fw-bold mb-1">{usr.full_name}</div>
        <div className="">{`followers: ${usr.followers_count} | following: ${usr.following_count} | posts: ${usr.media_count}`}</div>
        <div className="mb-1">{`avg likes: ${usr.avg_likes | 0} | avg comments: ${
          usr.avg_comments | 0
        } | last post: ${usr.last_post?.date?.format()}`}</div>
        <div style={{ whiteSpace: 'pre' }}>{usr.biography}</div>
        {usr.external_url && (
          <a href={usr.external_url} className="text-muted text-sm" target="_blank" rel="noopener noreferrer">
            {truncateStr(usr.external_url)}
          </a>
        )}
      </div>

      <div>
        <ul>
          <li>ID: {usr.id}</li>
          {usr?.is_business_account && <li>Business account </li>}
          {usr?.is_professional_account && <li>Professional account</li>}
          {usr?.business_email && <li>business_email: {usr?.business_email}</li>}
          {usr?.business_phone_number && <li>business_phone_number: {usr?.business_phone_number}</li>}
          {Boolean(usr.saved_media_count) && <li>Saved media: {usr.saved_media_count}</li>}
        </ul>
      </div>
    </>
  );
};

const Locations = ({ usr }: TProfileProps) => {
  return (
    <Sect title="Recent locations">
      {usr.top_locations.map((loc: any) => {
        return <div key={uuid()}>{loc?.[0]?.location?.name}</div>;
      })}
    </Sect>
  );
};
const Hashtags = ({ usr }: TProfileProps) => {
  return (
    <Sect title="Top hashtags">
      {usr.top_hashtags.splice(0, 10).map((h) => {
        return <div key={h?.[0]}>{h?.[0]}</div>;
      })}
    </Sect>
  );
};

const TaggedUser = ({ usr }: { usr: Usr }) => {
  return (
    <Sect title="Tagged users">
      {usr.top_tagged_users.map((u: any) => {
        return (
          <div className="mb-1" key={uuid()}>
            <div className="">
              <span className="me-1">{u?.full_name}</span>
              <a href={`/staff/partners/audit/?username=${u?.username}`} target="_blank" rel="noopener noreferrer">
                [audit]
              </a>
            </div>
            <a
              href={`https://instagram.com/${u.username}/`}
              className="text-muted text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`${u?.username}   ->`}
            </a>
          </div>
        );
      })}
    </Sect>
  );
};

const Schedule = ({ usr }: { usr: Usr }) => {
  return (
    <Sect title="Schedule">
      {Object.entries(usr.post_schedule).map(([k, v]: any) => {
        return (
          <div key={k} className="mb-1">
            <div>{k}</div>
            <div>
              {v.map((p: Post) => {
                return (
                  <div className="ms-1 text-sm" key={p.id}>
                    {p.date?.format({
                      // weekday: 'short',
                      month: 'long',
                      day: 'numeric',
                      year: '2-digit',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                    {` - ${p.likes_count} | ${p.comments_count} `}

                    <a
                      href={`http://instagram.com/p/${p.shortcode}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >{` >> `}</a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Sect>
  );
};

const Sect = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Staff.Section
      border
      title={title}
      actions={<div onClick={() => setOpen(!open)}>{open ? '[-]' : '[+]'}</div>}
      className="bg-white"
    >
      {open && children}
    </Staff.Section>
  );
};
