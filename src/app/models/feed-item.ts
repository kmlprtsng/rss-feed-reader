export class FeedItem {
  title: string;
  pubDate: Date;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;

  constructor(init: any) {
    if(!init) {
      return;
    }

    this.title = init.title;
    this.pubDate = new Date(init.pubDate);
    this.link = init.link;
    this.guid = init.guid;
    this.author = init.author;
    this.thumbnail = init.thumbnail;
    this.description = init.description;
  }
}
