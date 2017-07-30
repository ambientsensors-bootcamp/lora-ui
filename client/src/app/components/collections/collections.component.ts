import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: any= []

  constructor( private ws: WebServiceClient) { }

  ngOnInit() {
    this.ws.getResource("collections.json").subscribe(data => {
      this.collections = data.collections;
      console.log("data", data, "collections", this.collections)
    });
  }

}
