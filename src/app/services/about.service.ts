import { Injectable } from '@angular/core';
import { about } from '../Model/about.type';

@Injectable({
  providedIn: 'root' // This service is available in everywhere throughout the project
})
export class AboutService {

  aboutList: Array<about> = [
    {
      id: 1,
      title: 'What is Angular?',
      desc: 'Angular is a TypeScript-based web application framework developed by Google. It provides tools and features for building scalable single-page applications.'
    },
    {
      id: 2,
      title: 'Why Learn Angular?',
      desc: 'Angular provides components, services, dependency injection, routing and many other features that make application development easier and more structured.'
    }
  ]

  constructor() { }
}
