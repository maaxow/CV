import { Component, OnInit } from '@angular/core';
import { Experience } from "../experience";
import { DataService } from '../data.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor(private dataService: DataService) { }
  experiences = [];
  today = new Date();
  panelOpenState = false;
  
  ngOnInit(): void {
    this.getExperiences();
  }
  getExperiences(): void {
    this.dataService.getExepriences().subscribe(xps => this.experiences = xps);
  }
}
