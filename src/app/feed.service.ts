import { Injectable } from '@angular/core';
import { Feed } from './models/feed'

@Injectable()
export class FeedService {
  private feeds: Feed[];

  constructor() {
    this.feeds = [];
  }

  add (name: string, url: string) {
    this.feeds.push(new Feed(name, url));
  }

  getAll(): Feed[] {
    return this.feeds;
  }
}
