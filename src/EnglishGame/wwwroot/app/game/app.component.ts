import { Component, OnInit } from '@angular/core';

import { SignalRService } from './services/signalr.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SignalRService]
})
export class AppComponent {
    constructor(private service: SignalRService) { }

    ngOnInit() {
        this.service.start(true).subscribe(
            null,
            error => console.log('Error on init: ' + error));
    }
}
