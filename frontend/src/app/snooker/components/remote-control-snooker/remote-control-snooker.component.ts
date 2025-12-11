import { Component } from '@angular/core';
import {WebSocketService} from "../../../socket-dispatcher/services/websocket.service";

@Component({
  selector: 'app-remote-control-snooker',
  imports: [],
  templateUrl: './remote-control-snooker.component.html',
  styleUrl: './remote-control-snooker.component.scss',
})
export class RemoteControlSnookerComponent {

  constructor(private webSocketService: WebSocketService ) { }

  public sendCommand(command: String): void {
    this.webSocketService.sendMessage({
      type: 'chat',
      message: command,
      sender: 'User'
    })
  }
}
