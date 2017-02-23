import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../_services/auth.service";

@Component({
    moduleId: module.id,
    selector: "my-login",
    templateUrl: "../../../../html/game/login/login/view.html",
    styleUrls: ["../../../../html/game/login/login/style.css"]
})
export class LoginComponent {

    private userName: string;
    private password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    login() {
        this.authService.login(this.userName, this.password)
            .then(result => {
                if (result.State == 1) {
                    this.router.navigate(["./home"]);
                }
                else {
                    alert(result.Msg);
                }
            });
    }
}