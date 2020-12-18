import { DonateComponent } from './views/sections/donate/donate.component';
import { AboutUsComponent } from './views/sections/about-us/about-us.component';
import { PartnersComponent } from './views/sections/partners/partners.component';
import { ImpactComponent } from './views/sections/impact/impact.component';
import { MissionComponent } from './views/sections/mission/mission.component';
import { SolutionComponent } from './views/sections/solution/solution.component';
import { ChallengeComponent } from './views/sections/challenge/challenge.component';
import { FocusComponent } from './views/sections/focus/focus.component';
import { HomeComponent } from './views/sections/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ourfocus', component: FocusComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      useHash: true,
      scrollOffset: () => {
        if (window.innerWidth >= 992) {
          return [0, 90];
        } else if (window.innerWidth < 992) {
          return [0, 0];
        }
      },
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  size = 0;
}
