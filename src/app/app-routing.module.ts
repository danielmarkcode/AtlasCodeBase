import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtlLandingComponent } from './components/atl-landing/atl-landing.component';
import { AtlSkillsComponent } from './components/atl-skills/atl-skills.component';
import { AtlDashboardComponent } from './components/atl-dashboard/atl-dashboard.component';
import { AtlContactComponent } from './components/atl-contact/atl-contact.component';
import { AtlBlogComponent } from './components/atl-blog/atl-blog.component';

const routes: Routes = [
  { path: 'landing', component: AtlLandingComponent },
  { path: 'skills', component: AtlSkillsComponent },
  { path: 'dashboard', component: AtlDashboardComponent },
  { path: 'contact', component: AtlContactComponent },
  { path: 'blog', component: AtlBlogComponent },

  { path: '', redirectTo: '/landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
