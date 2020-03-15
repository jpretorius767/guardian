import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ArticleResponse } from '../models/article-response';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:4201/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any): Promise<any> {
   const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      return result.subscribe(resolve as any, reject as any);
    });
  }

  searchArticles(term: string, page = 1, pageSize = 10): Observable<ArticleResponse> {
    term = term.trim();
    return this.http.get(`${baseUrl}/search/${term}?page=${page}&page-size=${pageSize}`)
    .pipe(map(response => { return <ArticleResponse>response; }));
   };

  getArticles(): Observable<ArticleResponse>  { 
    return this.http.get(`${baseUrl}`)
      .pipe(map(response => { return <ArticleResponse>response; }));
  }

  getArticle(id: string): Observable<ArticleResponse>  { 
    return this.http.get(`${baseUrl}/${id}`)
    .pipe(map(response => { return <ArticleResponse>response; }));
  }

}