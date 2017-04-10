import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: "signout",
    templateUrl: "./signout.component.html",
    styleUrls: ["./signout.component.css"]
})
export class SignoutComponent {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    signout() {
        this.authService.signout()
            .then(result => {
                this.router.navigate(["./game"]);
            });
    }
}