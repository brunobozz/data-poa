import { Component, OnInit } from '@angular/core';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {

  faBus  = faBus;

  constructor() { }

  ngOnInit() {
  }

}
