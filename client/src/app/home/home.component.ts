import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Subscription } from 'rxjs';
import { Article } from '../models/article';
import { ArticleResponse } from '../models/article-response';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private articles: Article[] = [];
  private getSub: Subscription;
  private searchSub: Subscription;
  private loading: boolean = false;
  @ViewChild('searchField', { static: true }) searchField: ElementRef;
  selected = 'newest';

  constructor(private articleService: ArticlesService, private router: Router) { }

  clearSearch() {
    this.searchField.nativeElement.value = '';
    this.getArticles();
  }

  sortChanged(source: any, value: any) {
    console.log(source, value);
    this.sortData(this.selected === 'newest');
  }

  getArticles (): void {
    this.loading = true;
    this.getSub = this.articleService.getArticles().subscribe((response: ArticleResponse) => {
      this.articles = response.results;
      this.loading = false;
    }, (err) => {
      this.loading = false;
    })
  }

  sortData(ascending: Boolean) {
    if (ascending) {
        this.articles.sort((a, b) => new Date(b.webPublicationDate).getTime() - new Date(a.webPublicationDate).getTime());
    } else {
      this.articles.sort((a, b) => new Date(a.webPublicationDate).getTime() - new Date(b.webPublicationDate).getTime());
    }
  }

  showDetails(id: string) {
    this.router.navigate(['details', id]);
  }

  searchArticles (term: string): void {
    this.loading = true;
    this.searchSub = this.articleService.searchArticles(term).subscribe((response: ArticleResponse) => {
      this.articles = response.results;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      console.error(err);
    });
  }

  ngOnInit() {
    fromEvent(this.searchField.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , filter((res: string) => res.length > 2)
      , debounceTime(1000)        
      , distinctUntilChanged()
      ).subscribe((searchText: string) => {
        this.searchArticles(searchText);
      });
    this.getArticles();
  }

  ngOnDestroy () {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.searchSub) this.searchSub.unsubscribe();
  }


}
