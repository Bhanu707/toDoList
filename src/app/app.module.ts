import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
//import { AppBootstrapModuleModule } from './app-bootstrap-module'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,BrowserModule, 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
