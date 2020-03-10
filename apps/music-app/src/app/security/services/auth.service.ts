import { Injectable, Optional, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { AuthConfig } from './AuthConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized = new BehaviorSubject<boolean>(false);
  token: string | null = null;

  constructor(@Inject(AuthConfig) private config: AuthConfig) {
    this.token = sessionStorage.getItem('token');
    if (this.token) {
      this.authorized.next(true);
    }
  }

  authorize() {
    const { token_url, client_id, response_type, redirect_uri } = this.config;

    const params = new HttpParams({
      fromObject: {
        client_id,
        response_type,
        redirect_uri,
        show_dialog: 'true'
      }
    });

    window.open(
      `${token_url}?${params.toString()}`,
      '_blank',
      'width=400,height=500'
    );

    window.addEventListener('message', event => {
      if (event.origin !== 'http://localhost:4200') {
        return;
      }
      try {
        const data = JSON.parse(event.data);
        if (!data || data.type !== 'LOGIN_TOKEN_MESSAGE') {
          return;
        }
        this.parseToken(data.hash.slice(1));
      } catch (e) {}
    });
  }
  parseToken(tokenStr: string) {
    const tokenObj = new URLSearchParams(tokenStr);
    this.token = tokenObj.get('access_token');
    if (this.token) {
      sessionStorage.setItem('token', this.token);
      this.authorized.next(true);
    }
    console.log(this.token);
  }

  logout(){
    sessionStorage.setItem('token','');
    this.authorized.next(false)
  }

  getToken() {
    return this.token;
  }
}
