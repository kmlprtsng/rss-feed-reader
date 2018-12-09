import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Feed } from '../models/feed';
import { FeedItem } from '../models/feed-item';
import { FeedService } from '../shared/services/feed.service';

@Component({
  selector: 'app-feed-content',
  templateUrl: './feed-content.component.html',
  styleUrls: ['./feed-content.component.scss']
})
export class FeedContentComponent implements OnInit {
  @Input() feed: Feed;
  feedItems: FeedItem[];
  isFetching = false;
  hasErrorFetchingFeedData = false;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.retreivedFeedData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.feed) {
      this.retreivedFeedData();
    }
  }

  retreivedFeedData() {
    this.feedItems = [];
    this.isFetching = true;
    this.hasErrorFetchingFeedData = false;

    this.feedService.getFeedData(this.feed.url)
    .subscribe(feedItems => {
      this.feedItems = feedItems;
      this.isFetching = false;
    }, (error) => {
      this.isFetching = false;
      this.hasErrorFetchingFeedData = true;
      console.log('TODO: have to deal with failure yo!');
    });
  }
}
