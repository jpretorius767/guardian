import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ArticlesService } from './services/articles.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    SearchComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
