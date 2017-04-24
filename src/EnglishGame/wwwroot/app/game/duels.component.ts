import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UDuel } from './uduel';
import { URound } from './uround';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    preInfo: string;
    info: SafeHtml;
    selectedRound: URound;
    selectedDuel: UDuel;
    subjectId: number;

    private newduelUrl = 'api/Game/NewDuel';

    constructor(
        private authService: AuthService,
        private router: ActivatedRoute,
        private gameService: GameService,
        private signalrService: FeedService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {

        this.preInfo = '...no information yet...';
        this.info = this.sanitizer.bypassSecurityTrustHtml(this.preInfo);

        this.router.params.forEach((params: Params) => {
            this.subjectId = +params['id'];
            this.gameService.getDuels(this.subjectId).then(
                duels => {
                    this.duels = duels;
                });
        });
        

        let self = this;
        self.signalrService.addLol.subscribe(
            result => {
                this.info = result;
                this.gameService.getDuels(this.subjectId).then(
                    duels => {
                        this.duels = duels;
                    });
            }
        )
    }

    onSelect(duel: UDuel): void {
        this.selectedDuel = duel;
        this.selectedRound = duel.URounds[0];
    }

    newduel(): void {
        this.authService.authGet(this.newduelUrl + "/" + this.subjectId.toString()).then(
            result => {
                var duel = result.Data as UDuel;
                this.duels.push(duel);
                this.signalrService.subscribeToFeed(duel.Id);
            }
        );
    }
}