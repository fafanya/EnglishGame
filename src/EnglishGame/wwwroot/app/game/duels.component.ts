import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UDuel } from './uduel';

import { AuthService } from "./services/auth.service";
import { GameService } from './game.service';
import { RequestResult } from './models/request-result';

@Component({
    moduleId: module.id,
    selector: 'duels',
    templateUrl: './duels.component.html'
})
export class DuelsComponent implements OnInit {
    isLogin = false;
    duels: UDuel[];

    private newduelUrl = 'api/Game/NewDuel';

    constructor(
        private authService: AuthService,
        private router: Router,
        private gameService: GameService
    ) { }

    ngOnInit(): void {
        this.gameService.getDuels().then(
            duels => {
                this.duels = duels;
            }
        );
    }

    onSelect(duel: UDuel): void {
        this.router.navigate(['/round', duel.URounds[0].Id]);
    }

    newduel(): void {
        this.authService.authGet(this.newduelUrl).then(
            result => {
                var duel = result.Data as UDuel;
                this.duels.push(duel);
            }
        );
    }
}