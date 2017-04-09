import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from './game.service';
import { FeedService } from "../signalr/feed.service";

import { URound } from './uround';
import { UDuel } from './uduel';

@Component({
    moduleId: module.id,
    selector: 'round',
    templateUrl: './round-detail.component.html'
})
export class RoundDetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private gameService: GameService,
        private signalrService: FeedService) { }

    @Input()
    round: URound;
    duel: UDuel;
    lol: string;
 
    ngOnInit(): void
    {
        this.gameService.getDuel(1).then(duel => this.setDuel(duel));

        let self = this;

        self.signalrService.addLol.subscribe(
            lol => {
                self.lol = lol;
            }
        )
    }

    setRound(round: URound): void {
        this.round = round;
    }

    setDuel(duel: UDuel): void {
        this.duel = duel;
        this.round = duel.URounds[0];
    }

    leftChoice() {
        var b = 2 + 2;
        this.gameService.postAnswer(b.toString());
    }

    rightChoice() {
        var a = 1 + 1;
        this.gameService.postAnswer(a.toString());
    }

    goBack(): void {
        this.location.back();
    }
}