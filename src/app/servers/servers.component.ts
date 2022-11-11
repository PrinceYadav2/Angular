import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowEditing = false;
  serverCreationStatus = "No Server has been created";
  serverName = '';
  constructor() {
    setTimeout(()=>{
      this.allowEditing=true;
    },2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "Server has been created, Name is " + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  ngOnInit(): void {
  }

}
