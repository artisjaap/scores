import {Injectable, OnDestroy} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy {
  private socket!: WebSocket;
  private messageSubject = new Subject<any>();
  public messages$ = this.messageSubject.asObservable();
  private connectionStatus = new Subject<boolean>();
  public connectionStatus$ = this.connectionStatus.asObservable();

  constructor() {
    this.connect();
  }

  private connect(): void {
    if(environment.production){

      this.socket = new WebSocket('ws://'+window.location.host);
    }else {
      this.socket = new WebSocket('ws://localhost:3000');

    }

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.connectionStatus.next(true);
    };

    this.socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.messageSubject.next(message);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.connectionStatus.next(false);
    };

    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      this.connectionStatus.next(false);
      // Attempt to reconnect after 5 seconds
      setTimeout(() => this.connect(), 5000);
    };
  }

  // Send a message to the server
  public sendMessage(message: any): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected');
    }
  }

  // Close the WebSocket connection
  public closeConnection(): void {
    if (this.socket) {
      this.socket.close();
    }
  }

  ngOnDestroy(): void{
    this.closeConnection();
  }
}
