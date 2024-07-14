import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
