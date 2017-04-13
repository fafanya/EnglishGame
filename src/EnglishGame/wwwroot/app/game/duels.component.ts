import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UDuel } from './uduel';

import { AuthService } from "./services/auth.service";
import { GameService } from './game.service';
import { RequestResult } from './models/request-result';
import { FeedService } from "../signalr/feed.service";

@Component({
    moduleId: module.id,
    selector: 'duels',
    templateUrl: './duels.component.html'
})
export class DuelsComponent implements OnInit {
    isLogin = false;
    duels: UDuel[];
    info: string;

    private newduelUrl = 'api/Game/NewDuel';

    constructor(
        private authService: AuthService,
        private router: Router,
        private gameService: GameService,
        private signalrService: FeedService
    ) { }

    ngOnInit(): void {
        this.gameService.getDuels().then(
            duels => {
                this.duels = duels;
            }
        );

        let self = this;
        self.signalrService.addLol.subscribe(
            lol => {
                this.info = lol;
                this.gameService.getDuels().then(
                    duels => {
                        this.duels = duels;
                        //this.signalrService.unsubscribeFromFeed(duel.Id);
                    }
                );
            }
        )
    }

    onSelect(duel: UDuel): void {
        this.router.navigate(['/round', duel.URounds[0].Id]);
    }

    newduel(): void {
        this.authService.authGet(this.newduelUrl).then(
            result => {
                var duel = result.Data as UDuel;
                this.duels.push(duel);
                this.signalrService.subscribeToFeed(duel.Id);
            }
        );
    }
}