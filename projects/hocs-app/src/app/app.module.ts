import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscriberComponent } from './unsubscriber/unsubscriber.component';
import { DestroyedComponent } from './destroyed/destroyed.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscriberComponent,
    DestroyedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
