import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
    selector: 'round',
    templateUrl: '../html/game/round.component.html',
    providers: [GameService]
})
export class RoundComponent implements OnInit {

    question = "1+6";
    leftVariant = "4";
    rightVariant = "7";
 
    ngOnInit(): void
    {
    }

    leftChoice() {
        var b = 2 + 2;
    }

    rightChoice() {
        var a = 1 + 1;
    }
}