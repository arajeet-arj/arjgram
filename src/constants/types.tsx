export type PhotoType = {
  id: string | null;
  created_at: string | null;
  updated_at: string | null;
  promoted_at: string | null;
  width: number | null;
  height: number | null;
  color: string | null;
  blur_hash: string | null;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string | null;
    full: string | null;
    regular: string | null;
    small: string | null;
    thumb: string | null;
  };
  links: {
    self: string | null;
    html: string | null;
    download: string | null;
    download_location: string | null;
  };
  categories: any | null;
  likes: number | null;
  liked_by_user: boolean | null;
  current_user_collections: any | null;
  sponsorship: any | null;
  user: {
    id: string | null;
    updated_at: string | null;
    username: string | null;
    name: string | null;
    first_name: string | null;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string | null;
      html: string | null;
      photos: string | null;
      likes: string | null;
      portfolio: string | null;
      following: string | null;
      followers: string | null;
    };
    profile_image: {
      small: string | null;
      medium: string | null;
      large: string | null;
    };
    instagram_username: string | null;
    total_collections: number | null;
    total_likes: number | null;
    total_photos: number | null;
    accepted_tos: boolean | null;
    for_hire: boolean | null;
    social: {
      instagram_username: string | null;
      portfolio_url: null | string | null;
      twitter_username: null | string | null;
      paypal_email: null | string | null;
    };
  };
  exif: {
    make: string | null;
    model: string | null;
    exposure_time: string | null;
    aperture: string | null;
    focal_length: string | null;
    iso: number | null;
  };
  location: {
    title: string | null;
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      latitude: null | number;
      longitude: null | number;
    };
  };
  views: number | null;
  downloads: number | null;
};

export type PhotoListType = PhotoType[];
