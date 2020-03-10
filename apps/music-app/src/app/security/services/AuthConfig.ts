export class AuthConfig {
  /**
   * URL for token api
   * https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
   */
  token_url = 'https://accounts.spotify.com/authorize';
  client_id = '70599ee5812a4a16abd861625a38f5a6'
  response_type = 'token';
  redirect_uri = 'http://localhost:4200/after_redirect.html';
}
