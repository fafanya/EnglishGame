import { Component, OnInit } from '@angular/core';

import { FeedService } from './signalr/feed.service';
import { SignalRConnectionStatus } from './signalr/interfaces';

@Component({
    selector: 'my-app',
    templateUrl: '../html/app.component.html',
    styleUrls: ['../html/app.component.css'],
    providers: [FeedService]
})
export class AppComponent {
    title = 'Tracker of Issues';
    constructor(private service: FeedService) { }

    ngOnInit() {
        this.service.start(true).subscribe(
            null,
            error => console.log('Error on init: ' + error));
    }
}
