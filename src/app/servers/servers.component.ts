import { Component, OnInit } from '@angular/core';

@Component({
	// selector: '[app-servers]',
	// selector: '.app-servers',
	selector: 'app-servers',
	// template: `
	//   <app-server></app-server>
	//   <app-server></app-server>`,
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
	allowNewServer = true;
	serverCreationStatus = 'No server was created!';
	serverName = 'Testserver';
	servers = ['Testservet', 'Testserver 2'];

	constructor() {}

	ngOnInit() {}

	onCreateServer() {
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
