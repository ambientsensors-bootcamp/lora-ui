import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collection',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loracollection: any = [];

  constructor(private ws: WebServiceClient) { }

  ngOnInit() {
    // this.ws.getResource("find").subscribe(data => {
    //   this.loracollection = data;
    //   console.log("data", data, "loracollection", this.loracollection);
    // });
  }

}