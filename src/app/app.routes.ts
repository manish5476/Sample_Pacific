

import { HomePageComponent } from './components/home-page/home-page/home-page.component';


import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  {
    path: 'amenities',
    loadComponent: () => import('./components/amenities-page/amenities-page/amenities-page.component').then(mod => mod.AmenitiesPageComponent),
    title: 'Amenities & Features',
  },
  {
    path: 'events',
    loadComponent: () => import('./components/events-page/events-page/events-page.component').then(mod => mod.EventsPageComponent),
    title: 'Events & Functions',
  },
  {
    path: 'courses',
    loadComponent: () => import('./components/courses-page/courses-page/courses-page.component').then(mod => mod.CoursesPageComponent),
    title: 'Courses & Departments',
  },
  {
    path: 'notices',
    loadComponent: () => import('./components/notices-page/notices-page/notices-page.component').then(mod => mod.NoticesPageComponent),
    title: 'Notices & Announcements',
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-page/contact-page/contact-page.component').then(mod => mod.ContactPageComponent),
    title: 'Contact Us',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect to home for any other route
];