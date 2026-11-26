import { Component } from '@angular/core';
import { Organizer } from '../../data/organizers';

@Component({
  selector: 'app-organizer-list',
  imports: [],
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css',
})
export class OrganizerList {
  organizers: Organizer[] = [
    new Organizer(
      1,
      'Alice Martin',
      'alice@univ.fr',
      '/images/organizers/o1.jfif',
      'Université de Paris',
    ),
    new Organizer(
      2,
      'Sophie Durand',
      'karim@univ.tn',
      '/images/organizers/o2.jfif',
      'Université de Lyon',
    ),
    new Organizer(
      3,
      'Karim Ben Ali',
      'sophie@univ.fr',
      '/images/organizers/o3.jfif',
      'Université de Tunis',
    ),
    new Organizer(
      4,
      'Lucas Petit',
      'lucas@univ.fr',
      '/images/organizers/o4.jfif',
      'Université de Lille',
    ),
  ];
}
