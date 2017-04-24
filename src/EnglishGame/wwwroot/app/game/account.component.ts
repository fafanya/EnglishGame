import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { SignalrService } from "./services/signal.service";
import { GameService } from "./game.service";
import { USubject } from './usubject';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
    isLogin = false;
    userName: string;

    usubjects: USubject[];

    constructor(
        private authService: AuthService,
        private signalrService: SignalrService,
        private gameService: GameService,
        private router: Router){}

    ngOnInit(): void {
        this.isLogin = this.authService.checkLogin();
        if (this.isLogin) {
            this.authService.getUserInfo().then(res => {
                this.userName = (res.Data as any).UserName;
                this.getSubjects();
            });
        }
    }

    signout() {
        this.authService.signout()
            .then(result => {
                this.router.navigate(["./game"]);
            });
    }

    getSubjects() {
        this.gameService.getSubjects()
            .then(result => {
                this.usubjects = result;
            });
    }
}