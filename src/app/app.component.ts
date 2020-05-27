import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  me = {
    firstname: "Maxime",
    lastname: "ROSE",
    birthday: "12/29/1992",
    email: "maxime.rose@hotmail.fr"
  }
  
  age(): number{
    let today = new Date(),
    birthday = new Date(this.me.birthday),
    currentYear = today.getFullYear(),
    birthdayYear = birthday.getFullYear(),
    nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    return nextBirthday.getTime() > today.getTime() ? currentYear - birthdayYear - 1 : currentYear - birthdayYear;
  }
}
