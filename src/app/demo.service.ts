import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import { AppComponent }  from './app.component';
import { LinkComponent } from './link/link.component';
import { UserRoutingModule } from './user-routing.module';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        console.log("hi");
        return this.http.get('https://randomuser.me/api/?results=10');
 }
}