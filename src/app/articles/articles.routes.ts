import { Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from "./article-list/article-list.component";

export const ARTICLES_ROUTER: Routes = [
  { path: '', component: ArticleListComponent},
  { path: ':id', component: ArticleDetailComponent }
]
