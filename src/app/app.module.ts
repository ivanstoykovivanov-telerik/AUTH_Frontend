import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {TOKEN_NAME} from './services/auth.constant';
import {AppDataService} from './services/app-data.service';
import { TestComponent } from './test/test.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { FooComponent } from './foo/foo.component';
import { TagComponent } from './tags/tag/tag.component';
import { TagAddComponent } from './tags/tag-add/tag-add.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsOfUserComponent } from './products/products-of-user/products-of-user.component';
import { MarketMainPageComponent } from './market/market-main-page/market-main-page.component';
import { MarketShowSectionComponent } from './market/market-show-section/market-show-section.component';
import { CarouselComponent } from './market/carousel/carousel.component';
import { ProductSearchComponent } from './products/product-search/product-search.component';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    TestComponent,
    AdminTestComponent,
    FooComponent,
    TagComponent,
    TagAddComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductsOfUserComponent,
    MarketMainPageComponent,
    MarketShowSectionComponent,
    CarouselComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminAuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
