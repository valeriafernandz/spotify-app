export const CLIENT_ID = "470d32d20ecb43a693cee722cf68c405";
export const REDIRECT_URI = "http://localhost:3000/home";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";

export const SCOPES = [
    "user-read-email",
    "user-read-private",
    "user-top-read",
    "ugc-image-upload",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "user-read-playback-state","user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-follow-modify",
    "user-follow-read",
    "user-library-modify",
    "user-library-read"
  ];

export const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
export const ME_URL = `${SPOTIFY_API_URL}/me`;

export const PLAYLISTS_URL = `${ME_URL}/playlists`;
export const ARTISTS_URL = `${ME_URL}/top/artists`;
export const SHOWS_URL = `${ME_URL}/shows`;

export const ARTIST_URL = `${SPOTIFY_API_URL}/artists`;
export const PLAYLIST_URL = `${SPOTIFY_API_URL}/playlists`;