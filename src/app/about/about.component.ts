import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { about } from '../Model/about.type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  // public aboutService = inject(AboutService)

  // aboutData: Array<about> = []
  aboutData: about[] = []

  constructor(public aboutService: AboutService) { 
    this.aboutData = this.aboutService.aboutList
  }

  ngOnInit(): void {
    console.log(this.aboutService.aboutList, 'aboutservice')
  }

}
