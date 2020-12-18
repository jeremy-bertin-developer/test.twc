import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowUpComponent } from './views/arrow-up/arrow-up.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { NavbarOffCanvasComponent } from './views/navbar-off-canvas/navbar-off-canvas.component';
import { HomeComponent } from './views/sections/home/home.component';
import { FocusComponent } from './views/sections/focus/focus.component';
import { ChallengeComponent } from './views/sections/challenge/challenge.component';
import { SolutionComponent } from './views/sections/solution/solution.component';
import { MissionComponent } from './views/sections/mission/mission.component';
import { ImpactComponent } from './views/sections/impact/impact.component';
import { PartnersComponent } from './views/sections/partners/partners.component';
import { AboutUsComponent } from './views/sections/about-us/about-us.component';
import { DonateComponent } from './views/sections/donate/donate.component';
import { FooterComponent } from './views/sections/footer/footer.component';
import { PageComponent } from './views/page/page.component';
import { LazyImgDirective } from './views/lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArrowUpComponent,
    NavbarComponent,
    NavbarOffCanvasComponent,
    HomeComponent,
    FocusComponent,
    ChallengeComponent,
    SolutionComponent,
    MissionComponent,
    ImpactComponent,
    PartnersComponent,
    AboutUsComponent,
    DonateComponent,
    FooterComponent,
    PageComponent,
    LazyImgDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LazyImgDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
