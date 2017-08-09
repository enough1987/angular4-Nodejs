import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app
import { CommonModule } from '@angular/common'
//  to use FormGroup, ngModel
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';


import { DashboardModule } from "app/dashboard/dashboard.module";


import { MobileConsoleComponent } from "app/dashboard/mobile-console/mobile-console.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { PurchasesComponent } from "app/dashboard/purchases/purchases.component";
import { GiftsComponent } from "app/dashboard/gifts/gifts.component";
import { ReportsListComponent } from "app/dashboard/report-list/report-list.component";
import { AuthService } from "app/shared/auth.service";
import { ResourcesService } from "app/shared/resources.service";
import { LoginComponent } from "app/dashboard/login.component";
import { WithdrawListComponent } from "app/dashboard/withdraw-list/withdraw-list.component";
import { UsersListComponent } from "app/dashboard/users-list/users-list.component";

import { SafePipe } from "./shared/save.pipe";


import { GiftsService } from "app/shared/gifts.service";
import { ReportsService } from "app/shared/reports.service";
import { WithdrawService } from "app/shared/withdraw.service";
import { UsersService } from "app/shared/users.services";


import { NgxDatatableModule } from '@swimlane/ngx-datatable';






@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule ,
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,

    MobileConsoleComponent,
    DashboardComponent ,
    PurchasesComponent,
    GiftsComponent,
    ReportsListComponent, 
    LoginComponent,
    WithdrawListComponent,
    UsersListComponent,
    SafePipe
  ],
  providers: [
    AuthService,
    ResourcesService,
    GiftsService,
    ReportsService,
    WithdrawService,
    UsersService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
