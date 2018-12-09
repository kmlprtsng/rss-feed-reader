import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedService } from './shared/services/feed.service';
import { UrlValidatorService } from './shared/services/url-validator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FeedService, UrlValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
