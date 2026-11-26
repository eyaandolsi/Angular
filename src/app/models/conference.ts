import { Organizer } from '../data/organizers';   // adaptez le chemin
import { OrganizerList } from '../components/organizer-list/organizer-list';

//conferene is DTO class declared on the back
//best practice we need to daclare
export class Conference {
  id: number;
  title: string;
  description: string;
  picture: string;
  address: string;
  nbr_Max: number;
  nbr_Participation: number;
  date: string;
  organizers: Organizer[];
}
