import { Component, Input, OnInit } from '@angular/core';
import { GameService } from './game.service';

import { Round } from './round';

@Component({
    moduleId: module.id,
    selector: 'round',
    templateUrl: './round.component.html',
    providers: [GameService]
})
export class RoundComponent implements OnInit {

    @Input()
    round: Round;
 
    ngOnInit(): void
    {
        let temp = new Round();

        temp.id = 1;
        temp.question = "1+6";
        temp.leftVariant = "7";
        temp.rightVariant = "92";

        this.round = temp;
    }

    leftChoice() {
        var b = 2 + 2;
    }

    rightChoice() {
        var a = 1 + 1;
    }
}