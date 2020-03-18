import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ArticlesService } from './services/articles.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, 
  MatSnackBarModule, MatSelectModule, 
  MatChipsModule, MatSlideToggleModule, 
  MatCardModule, MatInputModule, MatDividerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
