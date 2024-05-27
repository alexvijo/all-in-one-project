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
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTER)
  },
  {
    path: '**',
    redirectTo: 'articles'
  }
];
