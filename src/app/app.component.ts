import { Component, ViewChild, ElementRef } from '@angular/core';
import { FeedService } from './feed.service';
import { UrlValidatorService } from './url-validator.service';
import { Feed } from './models/feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('newFeedName') private newFeedNameElm: ElementRef;
  feeds: Feed[] = [];
  newFeed = {name: '', url: ''};
  feedFilterKeyword = '';
  filteredFeeds = this.feeds;

  constructor(private feedService: FeedService, private urlValidatorService: UrlValidatorService) {
    this.feedService.getAll().subscribe((feeds: Feed[]) => {
      this.feeds = feeds;
      this.filterFeeds();
    });
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

    this.newFeedNameElm.nativeElement.focus();
    event.preventDefault();
  }

  removeFeed(feed: Feed) {
    this.feedService.remove(feed);
  }

  filterFeeds() {
    if (this.feedFilterKeyword.trim() === '') {
      this.filteredFeeds = this.feeds;
      return;
    }

    this.filteredFeeds = this.feeds.filter(feed => feed.name.indexOf(this.feedFilterKeyword) > -1);
  }
}
