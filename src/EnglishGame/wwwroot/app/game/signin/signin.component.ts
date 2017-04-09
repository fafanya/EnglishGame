import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: "signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.css"]
})
export class SigninComponent {

    private userName: string;
    private password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    signin() {
        this.authService.login(this.userName, this.password)
            .then(result => {
                if (result.State == 1) {
                    this.router.navigate(["./account"]);
                }
                else {
                    alert(result.Msg);
                }
            });
    }
}