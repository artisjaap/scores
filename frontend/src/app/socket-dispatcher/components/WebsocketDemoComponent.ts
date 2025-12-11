import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {WebSocketService} from "../services/websocket.service";

@Component({
    selector: 'app-websocket-demo',
    template: `
    <div *ngIf="isConnected$ | async; else disconnected">
      <h3>WebSocket Status: <span style="color: green">Connected</span></h3>
      <div>
        <input [(ngModel)]="message" placeholder="Type a message" (keyup.enter)="sendMessage()">
        <button (click)="sendMessage()">Send</button>
      </div>
      <div>
        <h4>Received Messages:</h4>
        <ul>
          <li *ngFor="let msg of receivedMessages">
            {{ msg.timestamp | date:'medium' }} - {{ msg.message }}
          </li>
        </ul>
      </div>
    </div>
    <ng-template #disconnected>
      <h3>WebSocket Status: <span style="color: red">Disconnected</span></h3>
      <p>Attempting to reconnect...</p>
    </ng-template>
  `,
    styles: [`
    div { margin: 10px; }
    input { margin-right: 10px; }
  `],
    standalone: false
})
export class WebsocketDemoComponent implements OnInit, OnDestroy {
  message = '';
  receivedMessages: any[] = [];
  private messageSubscription: Subscription = new Subscription();
  isConnected$ = this.websocketService.connectionStatus$;

  constructor(private websocketService: WebSocketService) {}

  ngOnInit(): void {
    this.messageSubscription = this.websocketService.messages$.subscribe(
      (message) => {
        this.receivedMessages = [message, ...this.receivedMessages].slice(0, 50);
      }
    );
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.websocketService.sendMessage({
        type: 'chat',
        message: this.message,
        sender: 'User'
      });
      this.message = '';
    }
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
