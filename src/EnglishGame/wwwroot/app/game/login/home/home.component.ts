import { Component, OnInit } from "@angular/core";

import { AuthService } from "../_services/auth.service";

@Component({
    moduleId: module.id,
    selector: "my-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    isLogin = false;
    userName: string;
    
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.isLogin = this.authService.checkLogin();
        if (this.isLogin) {
            this.authService.getUserInfo().then(res => {
                this.userName = (res.Data as any).UserName;
            });
        }
    }
}
