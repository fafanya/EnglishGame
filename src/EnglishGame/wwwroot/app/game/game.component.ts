import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_common/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
    isLogin = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void
    {
        this.isLogin = this.authService.checkLogin();
        if (this.isLogin) {
            this.router.navigate(["./account"]);
        }
    }
}