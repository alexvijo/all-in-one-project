import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.routes').then(m => m.ARTICLES_ROUTER)
  },
  {
    path: '**',
    redirectTo: 'articles'
  }
];
