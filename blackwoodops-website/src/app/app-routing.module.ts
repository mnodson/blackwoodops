import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertsComponent } from './certs/certs.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HomeComponent } from './home/home.component';
import { IdeaProsComponent } from './idea-pros/idea-pros.component';
import { StartupsComponent } from './startups/startups.component';
import { GenericComponent } from './generic/generic.component';
import { ProcessAutomationComponent } from './generic/pages/process-automation/process-automation.component';
import { ProjectManagementComponent } from './generic/pages/project-management/project-management.component';
import { SecurityAuditsComponent } from './generic/pages/security-audits/security-audits.component';
import { BusinessOperationsComponent } from './generic/pages/business-operations/business-operations.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  { path: 'process-automation', component: GenericComponent, data: { contentComponent: ProcessAutomationComponent } },
  { path: 'security-audits', component: GenericComponent, data: { contentComponent: SecurityAuditsComponent }},
  { path: 'project-management', component: GenericComponent, data: { contentComponent: ProjectManagementComponent } },
  { path: 'business-operations', component: GenericComponent, data: { contentComponent: BusinessOperationsComponent } },
  {
    component: CertsComponent,
    path: 'certs',

  },
  {
    component: ExpertiseComponent,
    path: 'expertise'
  },
  {
    component: IdeaProsComponent,
    path: 'ideapros'
  },
  {
    component: StartupsComponent,
    path: 'startups'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
