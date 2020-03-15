
  // "type": "article",
  // "sectionId": "world",
  // "sectionName": "World news",
  // "webPublicationDate": "2020-03-03T17:39:00Z",
  // "webTitle": "Coronavirus: 12 more test positive in UK bringing total to 51",
  // "webUrl": "https://www.theguardian.com/world/2020/mar/03/coronavirus-12-more-test-positive-in-uk-bringing-total-to-51",
  // "apiUrl": "https://content.guardianapis.com/world/2020/mar/03/coronavirus-12-more-test-positive-in-uk-bringing-total-to-51",
  // "isHosted": false,
  // "pillarId": "pillar/news",
  // "pillarName": "News"

export interface Article {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: Date;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}