import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../../_common/auth/auth.service";

@Component({
    moduleId: module.id,
    selector: "signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

    private userName: string;
    private password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    signup() {
        this.authService.signup(this.userName, this.password)
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