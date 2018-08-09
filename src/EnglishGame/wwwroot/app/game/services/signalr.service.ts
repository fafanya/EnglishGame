import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Observable, Subject } from "rxjs";
import { SignalRConnectionStatus } from '../../_common/signalr/interfaces';

@Injectable()
export class SignalRService {
    currentState = SignalRConnectionStatus.Disconnected;
    connectionState: Observable<SignalRConnectionStatus>;
    setConnectionId: Observable<string>;
    addLol: Observable<string>;
    private connectionStateSubject = new Subject<SignalRConnectionStatus>();
    private setConnectionIdSubject = new Subject<string>();
    private addLolSubject = new Subject<string>();

    private chatConnection: HubConnection;
    constructor(private http: Http) {
        this.connectionState = this.connectionStateSubject.asObservable();
        this.setConnectionId = this.setConnectionIdSubject.asObservable();
        this.addLol = this.addLolSubject.asObservable();
    }

    start(debug: boolean): Observable<SignalRConnectionStatus> {

        this.chatConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5000/broadcaster')
            .build();

        this.chatConnection.on('setConnectionId', (message) => {
            this.onSetConnectionId(message);
        });

        this.chatConnection.on('messageReceived', (message) => {
            console.log(message);
            this.onMessageReceived(message);
        });

        this.chatConnection.start()
            .then(reponse => {
                this.setConnectionState(SignalRConnectionStatus.Connected);
            })
            .catch(err => {
                console.log('connection error');
                this.connectionStateSubject.error(err);
            });

        this.chatConnection.onclose = e => {
            console.log('connection closed');
        };

        return this.connectionState;
    }

    private setConnectionState(connectionState: SignalRConnectionStatus) {
        console.log('connection state changed to: ' + connectionState);
        this.currentState = connectionState;
        this.connectionStateSubject.next(connectionState);
    }

    private onSetConnectionId(id: string) {
        this.setConnectionIdSubject.next(id);
    }

    private onMessageReceived(msg: string) {
        this.addLolSubject.next(msg);
    }

    public subscribeToFeed(matchId: number) {
        this.chatConnection.invoke('subscribe', matchId);
    }

    public unsubscribeFromFeed(matchId: number) {
        this.chatConnection.invoke('unsubscribe', matchId);
    }
}