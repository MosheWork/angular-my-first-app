import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'test server';
  userName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer 2'];
  showText = true;
  clicks = [0];
  clickCounter = 1;
  clicksText = 'number of click:';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }
  OnClickRestUserName() {
    this.userName = '';
  }
  OnClickShowText() {
    if (this.showText === true) this.showText = false;
    else this.showText = true;
  }
  onClick() {
    this.clicks.push(this.clickCounter);
    this.clicksText = 'number of click:' + this.clickCounter;
    this.clickCounter++;
  }
}
