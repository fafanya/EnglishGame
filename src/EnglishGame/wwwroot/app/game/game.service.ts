import { URound } from './uround';
import { UDuel } from './uduel';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthService } from './services/auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

    constructor(private http: Http, private authService: AuthService) { }


    private roundsUrl = 'api/Game/GetRounds';
    private duelsUrl = 'api/Game/GetDuels';
    private postAnswerUrl = 'api/Game/PostAnswer';

    getRounds(): Promise<URound[]> {
        return this.http.get(this.roundsUrl)
            .toPromise()
            .then((response) => { return this.getResponse(response); })
            .catch(this.handleError);
    }

    getDuels(): Promise<UDuel[]> {
        return this.http.get(this.duelsUrl)
            .toPromise()
            .then((response) =>
            {
                return this.getResponseDuel(response);
            })
            .catch(this.handleError);
    }

    postAnswer(duel: UDuel) {
        this.authService.authPost(this.postAnswerUrl, duel );
    }

    getRound(id: number): Promise<URound> {
        return this.getRounds()
            .then(rounds => rounds.find(round => round.Id === id));
    }

    getDuel(id: number): Promise<UDuel> {
        return this.getDuels()
            .then(duels => duels.find(duel => duel.Id === id));
    }

    private getResponse(response: Response): URound[] {
        var j = response.json() as URound[];
        return j;
    }

    private getResponseDuel(response: Response): UDuel[] {
        var j = response.json() as UDuel[];
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