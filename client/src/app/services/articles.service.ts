import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getArticles() {
    return this.request('get', `${baseUrl}/articles`);
  }

  getArticle(id: string) {
    return this.request('get', `${baseUrl}/articles/${id}`);
  }

  createArticle(article: Article) {
    console.log('createArticle ' + JSON.stringify(article));
    return this.request('post', `${baseUrl}/articles`, article);
  }

  updateArticle(article: Article) {
    console.log('updateArticle ' + JSON.stringify(article));
    return this.request('post', `${baseUrl}/articles/${article.id}`, article);
  }

  deleteArticle(id: string) {
    return this.request('delete', `${baseUrl}/articles/${id}`);
  }
}