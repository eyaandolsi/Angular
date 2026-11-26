import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Conference } from '../../models/conference';
import { Organizer } from '../../data/organizers';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string;
  listConferences: Conference[];
  searchTitle : string;

  //1- 1method() to be executed in order
  //instance Home
  constructor() {}
  //2- second method() to be executed
  ngOnInit() {
      this.title = 'Conférences à venir';

      const o1 = new Organizer(1, 'Alice Martin', 'alice@univ.fr', '/images/organizers/o1.jpg', 'Université de Paris');
      const o2 = new Organizer(2, 'Karim Ben Ali', 'karim@univ.tn', '/images/organizers/o2.jpg', 'Université de Tunis');
      const o3 = new Organizer(3, 'Sophie Durand', 'sophie@univ.fr', '/images/organizers/o3.jpg', 'Université de Lyon');

      this.listConferences = [
        {
          id: 1,
          title: 'Angular Conference',
          description: 'Angular Conference Developer',
          address: 'ESPRIT-Tunisia',
          nbr_Max: 50,
          nbr_Participation: 48,
          date: '10-12-2026',
          picture: 'https://...',
          organizers: [o1],
        },
        {
          id: 2,
          title: 'Angular React',
          description: 'Angular Conference Developer',
          address: 'ESPRIT-Tunisia',
          nbr_Max: 50,
          nbr_Participation: 50,
          date: '10-11-2026',
          picture: 'https://...',
          organizers: [],
        },
        {
          id: 3,
          title: 'Vue.js Summit',
          description: "Une journée dédiée aux bonnes pratiques et à l'écosystème Vue.js.",
          address: 'ESPRIT-Tunisia',
          nbr_Max: 30,
          nbr_Participation: 10,
          date: '15-12-2026',
          picture: 'https://...',
          organizers: [o3, o2], // cas vide
        },
      ];
    }
  participate(conference: Conference): void {
    conference.nbr_Participation++;
  }
}
