import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtlLandingComponent } from './components/atl-landing/atl-landing.component';
import { AtlSkillsComponent } from './components/atl-skills/atl-skills.component';
import { AtlDashboardComponent } from './components/atl-dashboard/atl-dashboard.component';
import { AtlContactComponent } from './components/atl-contact/atl-contact.component';
import { AtlBlogComponent } from './components/atl-blog/atl-blog.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
