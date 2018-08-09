import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../_common/auth/auth.service';
import { URound } from '../models/uround';
import { UDuel } from '../models/uduel';
import { USubject } from '../models/usubject';

@Injectable()
export class GameService {

    constructor(private http: Http, private authService: AuthService) { }

    private roundsUrl = 'api/Game/GetRounds';
    private duelsUrl = 'api/Game/GetDuels';
    private subjectsUrl = 'api/Game/GetSubjects';
    private postAnswerUrl = 'api/Game/PostAnswer';

    getRounds(): Promise<URound[]> {
        return this.http.get(this.roundsUrl)
            .toPromise()
            .then((response) =>
            {
                return this.getResponse(response);
            })
            .catch(this.handleError);
    }

    getDuels(id: number): Promise<UDuel[]> {
        return this.http.get(this.duelsUrl + "/" + id.toString())
            .toPromise()
            .then((response) =>
            {
                return this.getResponseDuel(response);
            })
            .catch(this.handleError);
    }

    getSubjects(): Promise<USubject[]> {

        return this.http.get(this.subjectsUrl)
            .toPromise()
            .then((response) => {
                return response.json() as USubject[];
            })
            .catch(this.handleError);
    }

    postAnswer(duel: UDuel) {
        this.authService.authPost(this.postAnswerUrl, duel);
    }

    getRound(id: number): Promise<URound> {
        return this.getRounds()
            .then(rounds => rounds.find(round => round.Id === id));
    }

    private getResponse(response: Response): URound[] {
        var a = response.json();
        var j = a as URound[];
        return j;
    }

    private getResponseDuel(response: Response): UDuel[] {
        var a = response.json();
        var j = a as UDuel[];
        return j;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}