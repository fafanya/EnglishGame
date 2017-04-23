import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
export class RoundDetailComponent {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private gameService: GameService,
        private signalrService: FeedService,
        private router: Router)
    {
    }

    @Input() round: URound;
    @Input() duel: UDuel;
    lol: string;

    setRound(round: URound): void {
        this.round = round;
    }

    setDuel(duel: UDuel): void {
        this.duel = duel;
        var userid = sessionStorage.getItem("userid");
        if (userid == this.duel.PrimaryPlayerId) {
            if (duel.URounds[0].PrimaryAnswer == null) {
                this.round = duel.URounds[0];
            }
        }
        else if (userid == this.duel.SecondaryPlayerId) {
            if (duel.URounds[0].SecondaryAnswer == null) {
                this.round = duel.URounds[0];
            }
        }
    }

    leftChoice()
    {
        var userid = sessionStorage.getItem("userid");
        if (userid == this.duel.PrimaryPlayerId) {
            this.round.PrimaryAnswer = this.round.LeftVariant;
        }
        else if (userid == this.duel.SecondaryPlayerId) {
            this.round.SecondaryAnswer = this.round.LeftVariant;
        }
        else {
            return;
        }
        if (this.round.Index == 9){
            this.gameService.postAnswer(this.duel);
            this.round = null;
        }
        else {
            this.round = this.duel.URounds[this.round.Index + 1];
        }
    }

    rightChoice()
    {
        var userid = sessionStorage.getItem("userid");
        if (userid == this.duel.PrimaryPlayerId) {
            this.round.PrimaryAnswer = this.round.RightVariant;
        }
        else if (userid == this.duel.SecondaryPlayerId) {
            this.round.SecondaryAnswer = this.round.RightVariant;
        }
        if (this.round.Index == 9)
        {
            this.gameService.postAnswer(this.duel);
            this.round = null;
        }
        else
        {
            this.round = this.duel.URounds[this.round.Index + 1];
        }
    }

    goBack(): void {
        this.location.back();
    }
}