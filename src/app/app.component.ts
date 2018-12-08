import { Component } from '@angular/core';
import { FeedService } from './feed.service';
import { UrlValidatorService } from './url-validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newFeed = {name: '', url: ''};

  constructor(private feedService: FeedService, private urlValidatorService: UrlValidatorService) {

  }

  addFeed(event: Event) {
    let name = this.newFeed.name.trim();
    let url = this.newFeed.url.trim();

    if(name === '' || url === '') {
      alert('Please make sure that feed\'s name and url is filled in');
      return;
    }

    if(!this.urlValidatorService.isValid(url)) {
      alert('Please enter a valid url');
      return;
    }

    this.feedService.add(name, url);
    this.newFeed.name = '';
    this.newFeed.url = '';

    event.preventDefault();
    console.log(this.feedService.getAll())
  }
}
