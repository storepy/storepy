export type TPartner = {
  slug?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  tt?: string;
  ig?: string;
  extra?: {
    age?: string | number;
    size?: string;
    interests?: string[];
    pay?: string;
    wears_lingerie?: boolean;
    is_newbie?: boolean;
  };
};
