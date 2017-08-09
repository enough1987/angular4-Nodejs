import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';


import { DashboardComponent } from "app/dashboard/dashboard.component";
import { MobileConsoleComponent } from "app/dashboard/mobile-console/mobile-console.component";
import { PurchasesComponent } from "app/dashboard/purchases/purchases.component";
import { GiftsComponent } from "app/dashboard/gifts/gifts.component";
import { ReportsListComponent } from "app/dashboard/report-list/report-list.component";
import { WithdrawListComponent } from "app/dashboard/withdraw-list/withdraw-list.component";
import { LoginComponent } from "app/dashboard/login.component";
import { UsersListComponent } from "app/dashboard/users-list/users-list.component";


import { AuthService } from "app/shared/auth.service";



export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthService],
    //data: {
    //  title: 'Home'
    //},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title : 'Dashboard' }
      },
      {
        path: 'dashboard/mobile-console',
        component: MobileConsoleComponent,
        data: { title : 'Mobile Console' }
      },
      {
        path: 'dashboard/mobile-console/:id',
        component: MobileConsoleComponent,
        data: { title : 'Mobile Console' }
      },
      {
        path: 'dashboard/purchases',
        component: PurchasesComponent,
        data: { title : 'Purchases' }
      },
      {
        path: 'dashboard/purchases/:id',
        component: PurchasesComponent,
        data: { title : 'Purchases' }
      },
      {
        path: 'dashboard/gifts',
        component: GiftsComponent,
        data: { title : 'Gifts' }
      },
      {
        path: 'dashboard/gifts/:id',
        component: GiftsComponent,
        data: { title : 'Gifts' }
      },
      {
        path: 'dashboard/report-list',
        component: ReportsListComponent,
        data: { title : 'Reports List' }
      },
      {
        path: 'dashboard/report-list/:id',
        component: ReportsListComponent,
        data: { title : 'Reports List' }
      },
      {
        path: 'dashboard/withdraw-list',
        component: WithdrawListComponent,
        data: { title : 'Withdraw List' }
      },
      {
        path: 'dashboard/withdraw-list/:id',
        component: WithdrawListComponent,
        data: { title : 'Withdraw List' }
      },
      {
        path: 'dashboard/users-list',
        component: UsersListComponent,
        data: { title : 'Users List' }
      },
      {
        path: 'dashboard/users-list/:id',
        component: UsersListComponent,
        data: { title : 'Users List' }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title : 'Login' }    
  } ,
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
