import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sideBar: SidebarComponent;

  faBars = faBars

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.sideBar.toggleMenu();
  }

}
