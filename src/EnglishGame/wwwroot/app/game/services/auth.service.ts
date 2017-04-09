import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { RequestResult } from "../models/request-result";

@Injectable()
export class AuthService {
    private tokeyKey = "token";
    private token: string;

    constructor(
        private http: Http
    ) { }

    login(userName: string, password: string): Promise<RequestResult> {
        return this.http.post("/api/TokenAuth", { Email: userName, Password: password }).toPromise()
            .then(response => {
                let a = response.json();
                let result = response.json() as RequestResult;
                if (result.State == 1) {
                    let json = result.Data as any;

                    sessionStorage.setItem("token", json.accessToken);
                }
                return result;
            })
            .catch(this.handleError);
    }

    signup(userName: string, password: string): Promise<RequestResult> {
        return this.http.post("/api/TokenAuth/Register", { Email: userName, Password: password }).toPromise()
            .then(response => {
                
                let result = response.json() as RequestResult;
                if (result.State == 1) {
                    let json = result.Data as any;

                    sessionStorage.setItem("token", json.accessToken);
                }
                return result;
            })
            .catch(this.handleError);
    }

    logout() { }

    checkLogin(): boolean {
        var token = sessionStorage.getItem(this.tokeyKey);
        return token != null;
    }

    getUserInfo(): Promise<RequestResult> {
        return this.authGet("/api/TokenAuth");
    }

    authPost(url: string, body: any): Promise<RequestResult> {
        let headers = this.initAuthHeaders();
        return this.http.post(url, body, { headers: headers }).toPromise()
            .then(response => response.json() as RequestResult)
            .catch(this.handleError);
    }

    authGet(url): Promise<RequestResult> {
        let headers = this.initAuthHeaders();
        return this.http.get(url, { headers: headers }).toPromise()
            .then(response => response.json() as RequestResult)
            .catch(this.handleError);
    }

    private getLocalToken(): string {
        if (!this.token) {
            this.token = sessionStorage.getItem(this.tokeyKey);
        }
        return this.token;
    }

    private initAuthHeaders(): Headers {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        var headers = new Headers();
        headers.append("Authorization", "Bearer " + token);

        return headers;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}