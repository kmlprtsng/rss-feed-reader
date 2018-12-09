import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedService } from './shared/services/feed.service';
import { UrlValidatorService } from './shared/services/url-validator.service';
import { FeedContentComponent } from './feed-content/feed-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FeedService, UrlValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
