import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Home } from './pages/home/home';
import { Footer } from './shared/footer/footer';
import { OrganizerList } from './components/organizer-list/organizer-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home,Footer, OrganizerList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}



