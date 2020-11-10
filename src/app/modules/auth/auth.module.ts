import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
