import { Component, OnInit } from '@angular/core';

import { FeedService } from './signalr/feed.service';
import { SignalRConnectionStatus } from './signalr/interfaces';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FeedService]
})
export class AppComponent {
    constructor(private service: FeedService) { }

    ngOnInit() {
        this.service.start(true).subscribe(
            null,
            error => console.log('Error on init: ' + error));
    }
}
