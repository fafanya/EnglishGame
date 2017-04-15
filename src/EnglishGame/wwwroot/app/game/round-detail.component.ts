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
export class RoundDetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private gameService: GameService,
        private signalrService: FeedService,
        private router: Router) { }

    @Input()
    round: URound;
    duel: UDuel;
    lol: string;
 
    ngOnInit(): void
    {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.gameService.getDuel(id)
                .then(duel => this.setDuel(duel));
        });

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
            this.router.navigate(['/duels']);
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
            this.router.navigate(['/duels']);
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