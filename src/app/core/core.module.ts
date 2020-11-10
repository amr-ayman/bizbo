import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {LayoutComponent, HeaderComponent, FooterComponent, LoaderComponent} from './components/main-layout';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      closeButton: true,
      preventDuplicates: true
    })
  ],
  providers: []
})
export class CoreModule {
}
