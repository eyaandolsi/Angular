import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Conference {
  id: number;
  titre: string;
  adresse: string;
  date: Date;
  description: string;
  image: string;
  placesDisponibles: number;
}

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  conferences: Conference[] = [
    // nafs el données mta3 el conférences
  ];
}
