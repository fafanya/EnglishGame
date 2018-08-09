import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription, timer } from 'rxjs';

import { GameService } from './services/game.service';
import { SignalRService } from './services/signalr.service';

import { URound } from './models/uround';
import { UDuel } from './models/uduel';

@Component({
    moduleId: module.id,
    selector: 'round',
    templateUrl: './round-detail.component.html'
})
export class RoundDetailComponent {

    private _round: URound;
    private _subscription: Subscription;

    @Input()
    set round(round: URound)
    {
        this._round = round;
        if (this._round != null) {
            let roundTimer = timer(100, 1000);
            this._subscription = roundTimer.subscribe(t => this.setCountdown(t));
        }
    }
    get round() : URound 
    {
        return this._round;
    }
    @Input() duel: UDuel;
    countdown: number;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private gameService: GameService,
        private signalrService: SignalRService,
        private router: Router)
    {
    }

    setRound(round: URound): void {
        this.round = round;
    }

    setCountdown(t: number)
    {
        if (t > 10)
        {
            this.noChoice();
        }
        else
        {
            this.countdown = (10 - t) * 10;
        }
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

    noChoice() {
        this._subscription.unsubscribe();
        var userid = sessionStorage.getItem("userid");
        if (userid == this.duel.PrimaryPlayerId)
        {
            this.round.PrimaryAnswer = "0";
        }
        else if (userid == this.duel.SecondaryPlayerId)
        {
            this.round.SecondaryAnswer = "0";
        }
        else
        {
            return;
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

    leftChoice()
    {
        this._subscription.unsubscribe();
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
        this._subscription.unsubscribe();
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