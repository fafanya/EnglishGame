import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from './game.service';

import { Round } from './round';

@Component({
    moduleId: module.id,
    selector: 'round',
    templateUrl: './round-detail.component.html'
})
export class RoundDetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private gameService: GameService) { }

    @Input()
    round: Round;
 
    ngOnInit(): void
    {
        this.gameService.getRound(1).then(round => this.setRound(round));
    }

    setRound(round: Round): void {
        this.round = round;
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