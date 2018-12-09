import { Injectable } from '@angular/core';
import { Feed } from '../../models/feed';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {
  private feeds: Feed[];
  private feedsRx = new BehaviorSubject<Feed[]>([]);

  constructor() {
    this.feeds = [];
  }

  add (name: string, url: string) {
    this.feeds.push(new Feed(name, url));
    this.feedsRx.next(this.feeds);
  }

  getAll(): Observable<Feed[]> {
    return this.feedsRx.asObservable();
  }

  remove(feed: Feed) {
    this.feeds.splice(this.feeds.indexOf(feed), 1);
    this.feedsRx.next(this.feeds);
  }
}
