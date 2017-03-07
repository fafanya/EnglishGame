import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'round',
    templateUrl: '../html/game/round.component.html'
})
export class RoundComponent implements OnInit {

    question = "1+6";
    leftVariant = "2";
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