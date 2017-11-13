import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

import { JWT } from '../models/jwt';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'S0E4iWql6rdlf4RXxpxvIlRdzGW9KFbe',
        domain: 'staticatchurchdev.auth0.com',
        responseType: 'token id_token',
        audience: 'https://staticatchurchdev.auth0.com/userinfo',
        redirectUri: 'environment.authRedirectUri', //Fix this
        scope: 'openid'
    });

    private jwt: JWT;
    private encodedAccessToken: string;
    private encodedIdToken: string;
    private expirationTime: Date;

    get userId(): string {
        return this.jwt !== undefined ? this.jwt.userId : undefined;
    }

    get isAuthenticated(): boolean {
        return this.expirationTime !== undefined &&
            new Date().getTime() < this.expirationTime.getTime();
    }

    public login(): void {
        this.auth0.authorize();
    }

    public processAuthentication(): void {
        if (window.location.hash) {
            this.setParametersFromHash(window.location.hash);
            this.jwt = new JWT(this.encodedIdToken);
        }
    }

    private setParametersFromHash(hash: string) {
        let parameters = window.location.hash.substr(1).split('&');
        for (let parameter of parameters) {
            let keyValue = parameter.split('=');

            switch (keyValue[0].toUpperCase()) {
                case 'ID_TOKEN':
                    this.encodedIdToken = keyValue.length > 1 ? keyValue[1] : undefined;
                    break;
                case 'ACCESS_TOKEN':
                    this.encodedAccessToken = keyValue.length > 1 ? keyValue[1] : undefined;
                    break;
                case 'EXPIRES_IN':
                    if (keyValue.length > 1) {
                        let date = new Date();
                        date.setSeconds(date.getSeconds() + Number(keyValue[1]));
                        this.expirationTime = date;
                    }
            }
        }
    }

    public logout(): void {
        this.encodedIdToken = undefined;
        this.encodedAccessToken = undefined;
        this.expirationTime = undefined;
        this.jwt = undefined;
    }
}