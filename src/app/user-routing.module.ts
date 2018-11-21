import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service'; 
import { RouterModule, Routes } from '@angular/router';  // our custom service, see below
 
import { AppComponent }  from './app.component';
import { UserRoutingModule } from './user-routing.module';
import { LinkComponent } from './link/link.component';



const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
    path: 'link/:id',
    component: LinkComponent,
    }
  ],

  }];
  
  @NgModule({

    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
    })

    export class UserRoutingModule { }