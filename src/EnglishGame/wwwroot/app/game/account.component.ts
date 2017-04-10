﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { SignalrService } from "./services/signal.service";

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
    isLogin = false;
    userName: string;

    constructor(private authService: AuthService,
        private signalrService: SignalrService,
        private router: Router){}

    ngOnInit(): void {
        this.isLogin = this.authService.checkLogin();
        if (this.isLogin) {
            this.authService.getUserInfo().then(res => {
                this.userName = (res.Data as any).UserName;
            });
        }
    }

    signout() {
        this.authService.signout()
            .then(result => {
                this.router.navigate(["./game"]);
            });
    }
}