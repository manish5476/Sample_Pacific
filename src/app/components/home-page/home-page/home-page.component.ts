import { Component } from '@angular/core';
import { CallToActionComponent } from "../call-to-action/call-to-action/call-to-action.component";
import { FeaturedCoursesComponent } from "../featured-courses/featured-courses/featured-courses.component";
import { HeroComponent } from "../hero/hero/hero.component";
import { AboutComponent } from "../about/about/about.component";

@Component({
  selector: 'app-home-page',
  imports: [CallToActionComponent, FeaturedCoursesComponent, HeroComponent, AboutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
