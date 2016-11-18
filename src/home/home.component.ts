import {Component} from '@angular/core';
//import {TrackListComponent} from '../tracklist/tracklist.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../headers.component.css'],
  //directives: [TrackListComponent]
})
export class HomeComponent {
  title = 'Welcome to Muse';
  middle = 'I';
  end = 'nvest';
  body = 'An investment platform developed by and for musicians';
}
