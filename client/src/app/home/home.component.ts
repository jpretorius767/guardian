import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Subscription } from 'rxjs';
import { Article } from '../models/article';
import { ArticleResponse } from '../models/article-response';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private articles: Article[] = [];
  private subscription: Subscription;
  private loading: boolean = false;
  @ViewChild('searchField', { static: true }) searchField: ElementRef;

  constructor(private articleService: ArticlesService) {

  }

  getArticles (): void {
    this.subscription = this.articleService.getArticles().subscribe((response: ArticleResponse) => {
      this.articles = response.results;
    })
  }

  searchArticles (term: string): void {
    this.loading = true;
    this.articleService.searchArticles(term).subscribe((response: ArticleResponse) => {
      this.articles = response.results;
      this.loading = false;
    }),(err) => {
       console.error(err);
       this.loading = false;
    });
  }

  ngOnInit() {
    fromEvent(this.searchField.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter((res: string) => res.length > 2)
      // Time in milliseconds between key events
      , debounceTime(1000)        
      // If previous query is diffent from current   
      , distinctUntilChanged()
      // subscription for response
      ).subscribe((searchText: string) => {
        this.loading = true;
        this.searchArticles(searchText);
        // this.searchGetCall(text).subscribe((res)=> {
        //   console.log('res',res);
        //   this.isSearching = false;
        //   this.apiResponse = res;
        // },(err)=>{
        //   this.isSearching = false;
        //   console.log('error',err);
        // });
      });
    this.getArticles();
  }

  ngOnDestroy () {
    if (this.subscription) this.subscription.unsubscribe();
  }


}
