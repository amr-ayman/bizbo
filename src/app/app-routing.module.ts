import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/services/guards/auth/auth.guard';
import {LayoutComponent} from './core/components/main-layout';
import {HomeGuard} from './core/services/guards/home/home.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    canActivate: [HomeGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'error', loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'error', loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule)
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/error/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
