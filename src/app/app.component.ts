import {Component, OnInit, isDevMode} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cummunity-app';

  ngOnInit(): void {
    if (isDevMode()) {
      console.log('Dev Mode')
    } else {
      console.log('Prod Mode')
    }
  }
}
