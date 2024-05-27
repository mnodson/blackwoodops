import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { ExpertiseComponent } from './expertise/expertise.component';
import { CertsComponent } from './certs/certs.component';
import { HomeComponent } from './home/home.component';
import { IdeaProsComponent } from './idea-pros/idea-pros.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartupsComponent } from './startups/startups.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { GenericComponent } from './generic/generic.component';
import { ProcessAutomationComponent } from './generic/pages/process-automation/process-automation.component';
import { ProjectManagementComponent } from './generic/pages/project-management/project-management.component';
import { SecurityAuditsComponent } from './generic/pages/security-audits/security-audits.component';
import { BusinessOperationsComponent } from './generic/pages/business-operations/business-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseComponent,
    CertsComponent,
    HomeComponent,
    IdeaProsComponent,
    NavigationComponent,
    StartupsComponent,
    GenericComponent,
    ProcessAutomationComponent,
    ProjectManagementComponent,
    SecurityAuditsComponent,
    BusinessOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    AnimateOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
