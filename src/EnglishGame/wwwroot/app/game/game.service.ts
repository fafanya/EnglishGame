import { Round } from './round';
import { ROUNDS } from './mock-rounds';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

    constructor(private http: Http) { }

    private roundsUrl = 'api/Game/GetRounds';
    private postAnswerUrl = 'api/Game/PostAnswer';

    getRounds(): Promise<Round[]> {
        return this.http.get(this.roundsUrl)
            .toPromise()
            .then((response) => { return this.getResponse(response); })
            .catch(this.handleError);
        //return Promise.resolve(ROUNDS);
    }

    postAnswer(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.postAnswerUrl, { id }, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
    }

    getRound(id: number): Promise<Round> {
        return this.getRounds()
            .then(rounds => rounds.find(round => round.id === id));
    }

    private getResponse(response: Response): Round[] {
        return response.json() as Round[];
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