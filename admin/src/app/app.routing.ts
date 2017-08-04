import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';


import { DashboardComponent } from "app/dashboard/dashboard.component";
import { MobileConsoleComponent } from "app/dashboard/mobile-console/mobile-console.component";
import { PurchasesComponent } from "app/dashboard/purchases/purchases.component";
import { GiftsComponent } from "app/dashboard/gifts/gifts.component";
import { LoginComponent } from "app/dashboard/login.component";


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
