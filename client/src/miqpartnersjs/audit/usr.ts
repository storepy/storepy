export default class Usr {
  _data: any = {};
  constructor(data: any) {
    this._data = data;
  }

  get top_tagged_users() {
    const us: any = {};
    this.tagged_users.forEach((u: any) => {
      us[u?.id] = { ...u, t_count: (us[u?.id]?.t_count || 0) + 1 };
    });
    return Object.values(us).sort((i: any, v: any) => (i.t_count < v.t_count ? 1 : -1));
  }

  get tagged_users() {
    let usrs: any[] = [];
    this.posts.forEach((p: Post) => {
      usrs = usrs.concat(p.tagged_users);
    });
    return usrs;
  }

  get top_hashtags() {
    const counts: any = {};
    this.hashtags.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });
    return Object.entries<number>(counts).sort((i: any, v: any) => (i[1] < v[1] ? 1 : -1));
  }

  get hashtags(): string[] {
    let tags: string[] = [];
    this.posts.forEach((p: Post) => {
      tags = tags.concat(p.hashtags);
    });
    return tags;
  }

  get most_liked_post() {
    return this.posts.sort((i: Post, v: Post) => (i.likes_count < v.likes_count ? 1 : -1))?.[0];
  }
  get least_liked_post() {
    return this.posts.sort((i: Post, v: Post) => (i.likes_count > v.likes_count ? 1 : -1))?.[0];
  }
  get most_commented_post() {
    return this.posts.sort((i: Post, v: Post) => (i?.comments_count < v?.comments_count ? 1 : -1))?.[0];
  }
  get least_commented_post() {
    return this.posts.sort((i: Post, v: Post) => (i?.comments_count > v?.comments_count ? 1 : -1))?.[0];
  }

  get last_post() {
    const p = this.media?.[0];
    if (!p) return;
    return new Post(p);
  }

  get top_locations() {
    const locs: any = {};
    this.posts.forEach((p: Post) => {
      const _d = p.location?.slug;
      if (!Object.keys(locs).includes(_d!)) locs[_d!] = [];

      locs[_d!].push(p);
    });
    return Object.values(locs).sort((i: any, v: any) => {
      //   console.log(i);
      return i.length > v.length ? -1 : 1;
    });
  }

  get post_schedule() {
    const dt: any = {};
    this.posts.forEach((p: Post) => {
      const _d = p.date;
      const k = _d?.format({ weekday: 'long' });
      if (!Object.keys(dt).includes(k!)) dt[k!] = [];

      dt[k!].push(p);
    });
    return dt;
  }

  get posts() {
    return this.media.map((m: any) => new Post(m));
  }

  get avg_likes() {
    let total = 0;
    this.media?.forEach((m: any) => {
      total += m?.edge_liked_by?.count;
    });
    return total / this.media_length;
  }
  get avg_comments() {
    let total = 0;
    this.media?.forEach((m: any) => {
      total += m?.edge_media_to_comment?.count;
    });
    return total / this.media_length;
  }

  get captions() {
    return this.media?.map((m: any) => m?.edge_media_to_caption?.edges?.[0]?.node?.text);
  }
  get locations() {
    return this.media?.map((m: any) => m?.location);
  }

  get media() {
    return this._data?.['edge_owner_to_timeline_media']?.['edges']?.map((i: any) => i?.node) || [];
  }
  get media_count() {
    return this._data?.['edge_owner_to_timeline_media']?.['count'];
  }
  get media_length() {
    return this.media.length;
  }

  get saved_media() {
    return this._data?.['edge_saved_media']?.['edges'];
  }
  get saved_media_count() {
    return this._data?.['edge_saved_media']?.['count'];
  }
  get followers_count() {
    return this._data?.['edge_followed_by']?.['count'];
  }
  get following_count() {
    return this._data?.['edge_follow']?.['count'];
  }
  get hide_like_and_view_counts() {
    return this._data?.['hide_like_and_view_counts'];
  }
  get business_email() {
    return this._data?.['business_email'];
  }
  //
  get external_url() {
    return this._data?.['external_url'];
  }
  get fbid() {
    return this._data?.['fbid'];
  }
  get id() {
    return this._data?.['id'];
  }
  get profile_pic_url() {
    return this._data?.['profile_pic_url'];
  }
  get business_phone_number() {
    return this._data?.['business_phone_number'];
  }
  get business_address_json() {
    return this._data?.['business_address_json'];
  }

  get is_joined_recently() {
    return this._data?.['is_joined_recently'];
  }
  get is_business_account() {
    return this._data?.['is_business_account'];
  }
  get is_professional_account() {
    return this._data?.['is_professional_account'];
  }
  get is_verified() {
    return this._data?.['is_verified'];
  }
  get is_private() {
    return this._data?.['is_private'];
  }
  get full_name() {
    return this._data?.['full_name'];
  }
  get biography() {
    return this._data?.['biography'];
  }
  get username() {
    return this._data?.['username'];
  }
  get isValid() {
    return Boolean(this._data?.fbid);
  }
}

export class Post {
  _data: any = {};
  constructor(data: any) {
    if (data) {
      if (data?.node) data = data.node;
      this._data = data;
    }
  }

  get hashtags() {
    const cap: string = this.caption || '';
    return Array.from(cap.matchAll(/(^|\s)(#[a-z\d-]+)/g)).map((h) => h?.[0]?.replace('\n', '')?.replace(' ', ''));
  }

  get tagged_users() {
    return this._data?.edge_media_to_tagged_user?.edges?.map((i: any) => i?.node?.user);
  }
  get caption() {
    return this._data?.edge_media_to_caption?.edges?.[0]?.node?.text;
  }

  get date() {
    const date = this._data?.taken_at_timestamp;
    if (!date) return;
    return new Date(date * 1000);
  }

  get comments_count() {
    return this._data?.edge_media_to_comment?.count;
  }
  get likes_count() {
    return this._data?.edge_liked_by?.count;
  }
  get location_name() {
    return this?.location?.name;
  }
  get location() {
    return this._data?.location;
  }
  get is_video() {
    return this._data?.is_video;
  }
  get shortcode() {
    return this._data?.shortcode;
  }
  get id() {
    return this._data?.id;
  }
}
