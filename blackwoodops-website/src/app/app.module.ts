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

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseComponent,
    CertsComponent,
    HomeComponent,
    IdeaProsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
