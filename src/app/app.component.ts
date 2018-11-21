import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 
declare var require: any;
declare var results: any;

 
@Component({
  selector: 'body',
  template: require('./app.component.html'),

})
export class AppComponent {
  results: any[];
  public foods;
  constructor(private _demoService: DemoService) { 
    this._demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.foods = data;
         console.log(this.foods);},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
  );
  }

  ngOnInit() {
    //this.getFoods();
  }

  getFoods() {
    
    }
    
  }

