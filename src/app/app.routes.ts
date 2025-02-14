import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('@/app/modules/login/components/login.component'),
  },
  {
    path: 'protected-page',
    loadComponent: () =>
      import(
        '@/app/modules/protected-page/components/protected-page.component'
      ),
  },
];
