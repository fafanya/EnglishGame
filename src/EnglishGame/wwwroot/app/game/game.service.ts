import { Round } from './round';
import { ROUNDS } from './mock-rounds';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

    constructor(private http: Http) { }

    private roundsUrl = 'api/Rounds';

    getRounds(): Promise<Round[]> {
        /*return this.http.get(this.issuesUrl)
            .toPromise()
            .then((response) => { return this.getResponse(response); })
            .catch(this.handleError);*/
        return Promise.resolve(ROUNDS);
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
}