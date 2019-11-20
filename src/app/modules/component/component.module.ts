import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';

import { LoginComponent } from 'src/app/components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ComponentModule { }
