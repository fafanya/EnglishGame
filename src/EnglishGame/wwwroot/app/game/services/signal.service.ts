import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SignalrService {
    //signalR connection reference
    private connection: SignalR;

    //signalR proxy reference
    private proxy: SignalR.Hub.Proxy;

    addLol: Observable<string>;

    private addLolSubject = new Subject<string>();

    constructor() {

        this.addLol = this.addLolSubject.asObservable();

        //initialize connection
        this.connection = $.connection;

        //to create proxy give your hub class name as parameter. IMPORTANT: notice that I followed camel casing in giving class name
        this.proxy = $.connection.hub.createHubProxy('chatHub');

        //define a callback method for proxy
        this.proxy.on('messageReceived', (latestMsg) => this.onMessageReceived(latestMsg));

        this.connection.hub.start();
    }

    private onMessageReceived(latestMsg: string) {
        console.log('New message received: ' + latestMsg);
        this.addLolSubject.next(latestMsg);
    }

    //method for sending message
    broadcastMessage(msg: string) {
        //invoke method by its name using proxy 
        this.proxy.invoke('sendMessage', msg);
    }
}