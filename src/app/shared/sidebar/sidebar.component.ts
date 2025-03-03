import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector:'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private sideBarService = inject(SidebarService);
  public menuItems:any[] = [];

  constructor(){
    this.menuItems = this.sideBarService.menu;

  }

}
