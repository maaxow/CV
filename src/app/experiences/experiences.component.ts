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

  public calculateDuration(start: string, end: string): string {
    var startDate = new Date(start),
      endDate;
    if (end == null || end == "") {
      endDate = this.today;
    } else {
      endDate = new Date(end);
    }
    var diff = endDate.getTime() - startDate.getTime(),
      years = Math.floor(diff / (60 * 60 * 24 * 30 * 12 * 1000)),
      months = Math.floor(diff / (60 * 60 * 24 * 30 * 1000)) - (years * 12),
      str = years > 0 ? years.toString() + " an" + (years > 1 ? "s " : " ") : "";
    str += months > 0 ? months.toString() + " mois" : "";
    return str;
  }

}
