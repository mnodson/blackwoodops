import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertsComponent } from './certs/certs.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HomeComponent } from './home/home.component';
import { IdeaProsComponent } from './idea-pros/idea-pros.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
