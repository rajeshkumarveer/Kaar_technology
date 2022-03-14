import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    OurServicesComponent, AchievementComponent, TeamsComponent, ContactsComponent, FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
