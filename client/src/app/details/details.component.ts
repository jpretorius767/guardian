import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleResponse, Article } from '../models';

@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  article: Article;
  loading = false;

  constructor(
    private route: ActivatedRoute, 
    private articleService: ArticlesService) {
    this.route.params.subscribe( params => this.getArticle(params.id));
  }

  getArticle (id: string) {
    this.loading = true;
    this.articleService.getArticle(id).subscribe((response: ArticleResponse) => {
      console.log(response.results[0]);
      this.article = response.results[0];
    }, (err) => {
      this.loading = false;
      console.error(err);
    });
  }
  
  ngOnInit() {
  }

}
