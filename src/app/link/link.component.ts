import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 
import {Observable} from 'rxjs/Rx';


declare var require: any;


@Component({
  selector: 'select',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

      

  constructor(
  private route: ActivatedRoute) { 
    
    
    this.route.snapshot.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    console.log("hello from 2nd page");
  }

}
