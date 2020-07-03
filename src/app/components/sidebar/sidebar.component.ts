import { Component, OnInit } from '@angular/core';
import { faBus, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faBus = faBus;
  faHome = faHome;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu(){
    if(this.isOpen){
      this.isOpen = !this.isOpen;
    }
  }

}
