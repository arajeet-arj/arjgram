export const API_URL = {
  randomPhoto: `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&count=10`,
  userProfile: (profile: string) =>
    `https://api.unsplash.com/users/${profile}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  userPhots: (profile: string) =>
    `https://api.unsplash.com/users/${profile}/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  userPhotosNext: (profile: string, page: number) =>
    `https://api.unsplash.com/users/${profile}/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${page}`,
};
