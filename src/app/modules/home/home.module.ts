import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './pages/home/home.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
