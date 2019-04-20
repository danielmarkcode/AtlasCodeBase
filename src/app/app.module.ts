import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AtlLandingComponent } from './components/atl-landing/atl-landing.component';
import { AtlSkillsComponent } from './components/atl-skills/atl-skills.component';
import { AtlDashboardComponent } from './components/atl-dashboard/atl-dashboard.component';
import { AtlContactComponent } from './components/atl-contact/atl-contact.component';
import { AtlBlogComponent } from './components/atl-blog/atl-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialModule } from './app-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    AtlLandingComponent,
    AtlSkillsComponent,
    AtlDashboardComponent,
    AtlContactComponent,
    AtlBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
