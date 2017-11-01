import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TransportType, ConsoleLogger, LogLevel, HttpConnection, HubConnection} from "@aspnet/signalr-client";
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
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

        var transportType = TransportType.WebSockets;

        var logger = new ConsoleLogger(LogLevel.Information);
        var chatHub = new HttpConnection('http://localhost:5000/broadcastert',
            { transport: transportType});
        this.chatConnection = new HubConnection(chatHub, logger);

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