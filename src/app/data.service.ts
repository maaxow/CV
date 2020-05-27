import { Injectable } from '@angular/core';
import { Experience } from './experience';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getExepriences(): Observable<Experience[]> {
    return this.http.get<Experience[]>("./assets/experiences.json");
  }
}
