import * as React from 'react';

import lang from './profile.lang';

import Staff from '@miq/staffjs';
import { truncateStr, uuid } from '@miq/utiljs';

import Usr, { Post } from './usr';

const { i18n } = window || {};

type TProfileProps = { usr: Usr };

export const Profile = ({ usr }: TProfileProps) => {
  return (
    <div>
      <div className="d-grid grid-md-2 gap-2">
        <Info usr={usr} />
      </div>

      <Posts usr={usr} />

      <div className="d-grid grid-md-2 gap-2">
        <Locations usr={usr} />
        <Hashtags usr={usr} />
        <TaggedUsers usr={usr} />
        <Schedule usr={usr} />
      </div>
    </div>
  );
};

const Posts = ({ usr }: TProfileProps) => {
  return (
    <div className="my-3">
      <div className="d-grid grid-2 grid-md-3 gap-1">
        <PostImg
          post={usr.last_post!}
          title={<div className="text-sm my-1">{i18n?.(lang, 'PostImg.lastPostTitle')}</div>}
        />
        <PostImg
          post={usr.most_liked_post}
          title={<div className="text-sm my-1">{i18n?.(lang, 'PostImg.mostLikeTitle')}</div>}
        />
        <PostImg
          post={usr.most_commented_post}
          title={<div className="text-sm my-1">{i18n?.(lang, 'PostImg.mostCommentTitle')}</div>}
        />
        <PostImg
          post={usr.least_liked_post}
          title={<div className="text-sm my-1">{i18n?.(lang, 'PostImg.leastLikeTitle')}</div>}
        />
        <PostImg
          post={usr.least_commented_post}
          title={<div className="text-sm my-1">{i18n?.(lang, 'PostImg.leastCommentTitle')}</div>}
        />
      </div>
    </div>
  );
};

const PostImg = ({ post, ...props }: { post: Post; title?: React.ReactNode }) => {
  const [o, setO] = React.useState(false);
  if (!post?.id) return null;

  return (
    <Staff.Section
      title={props?.title}
      actions={
        <div>
          <span className="p-1" onClick={() => setO(!o)}>
            {o ? '[ - ]' : '[ + ]'}
          </span>
        </div>
      }
      footer={
        <>
          <div className="text-sm">
            <div>{`❤️ ${post.likes_count}   💬 ${post.comments_count}`}</div>
            <div>{`🕜 ${post.dateStr}`}</div>
            {o && (
              <>
                <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{post.caption}</div>
              </>
            )}
          </div>
        </>
      }
      style={{ position: 'relative', marginBottom: 0 }}
    >
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <img
          src={`data:image/jpg;base64, ${post.display_url}`}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '1/1' }}
          className="rounded"
          alt=""
        />
      </a>
    </Staff.Section>
  );
};

const Info = ({ usr }: TProfileProps) => {
  return (
    <>
      <div className="mt-2">
        <div className="d-flex align-items-center mb-1">
          <Img64 src={usr.profile_pic_url} alt={usr.username} />
          <div className="ms-1 mb-1">
            <div className="fw-bold">{usr.full_name}</div>
            <div>{`followers: ${usr.followers_count} | following: ${usr.following_count} | posts: ${usr.media_count}`}</div>
            <div>{`avg likes: ${usr.avg_likes | 0} | avg comments: ${usr.avg_comments | 0}`}</div>
          </div>
        </div>

        {usr.biography && <div style={{ whiteSpace: 'pre' }}>{usr.biography}</div>}

        {usr.external_url && (
          <a href={usr.external_url} className="text-muted text-sm" target="_blank" rel="noopener noreferrer">
            {truncateStr(usr.external_url)}
          </a>
        )}
      </div>

      <div>
        <ul>
          <li>{usr?.cached && <span className="text-xs fw-lighter text-muted">{`cached`}</span>}</li>
          <li>ID: {usr.id}</li>
          {usr?.is_business_account && <li>Business account </li>}
          {usr?.is_professional_account && <li>Professional account</li>}
          {usr?.business_email && <li>Email: {usr?.business_email}</li>}
          {usr?.business_phone_number && <li>Numéro: {usr?.business_phone_number}</li>}
          {Boolean(usr.saved_media_count) && <li>Saved media: {usr.saved_media_count}</li>}
        </ul>
      </div>
    </>
  );
};

const Locations = ({ usr }: TProfileProps) => {
  return (
    <Sect title={i18n(lang, 'Locations.title')}>
      {usr.top_locations.map((loc: any) => {
        return <div key={uuid()}>{loc?.[0]?.location?.name}</div>;
      })}
    </Sect>
  );
};

const Hashtags = ({ usr }: TProfileProps) => {
  return (
    <Sect title={i18n(lang, 'Hashtags.title')}>
      {usr.top_hashtags.splice(0, 10).map((h) => {
        return <div key={h?.[0]}>{h?.[0]}</div>;
      })}
    </Sect>
  );
};

const TaggedUsers = ({ usr }: { usr: Usr }) => {
  return (
    <Sect title={i18n(lang, 'TaggedUsers.title')}>
      {usr.top_tagged_users.map((u: any) => {
        return (
          <div className="mb-1" key={uuid()}>
            <div>
              <span className="me-1">{u?.full_name}</span>
              <a
                href={`/staff/partners/audit/?username=${u?.username}`}
                className="color-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n(lang, 'TaggedUsers.auditLinkLabel')}
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
    <Sect title={i18n(lang, 'Schedule.title')}>
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

                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="ms-2">{` >> `}</a>
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

const Sect = ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => {
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

const Img64 = ({ src, width = 64, ...props }: { src: string; alt?: string; width?: number }) => {
  return (
    <img
      src={`data:image/jpg;base64, ${src}`}
      {...props}
      style={{ width, height: 'auto' }}
      className="rounded"
      alt=""
    />
  );
};
