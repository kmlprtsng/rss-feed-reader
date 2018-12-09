import { Injectable } from '@angular/core';
import { Feed } from '../../models/feed';
import { FeedItem } from '../../models/feed-item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const seedFeedData: Feed[] = [ new Feed('Reddit Giffs', 'https://www.reddit.com/r/gifs.rss'), new Feed('Tech Crunch', 'https://techcrunch.com/feed/')];
@Injectable()
export class FeedService {
  private feeds: Feed[] = seedFeedData;
  private feedsRx = new BehaviorSubject<Feed[]>(this.feeds);

  constructor(private http: HttpClient) {
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

  getFeedData(url: string) {
    return this.http
    .get(`https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=w6ytzjmjgc5dile9ts448pdo9mtk4igxn2iljzac`)
    .map((response: any) => response.items.map(feedItem => new FeedItem(feedItem)));
  }
}
