import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import { TestComponent } from './test/test.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { FooComponent } from './foo/foo.component';
import { MarketMainPageComponent } from './market/market-main-page/market-main-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'foo',
    component: FooComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'testAdmin',
    component: AdminTestComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'market',
    component: MarketMainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
