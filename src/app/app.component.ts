import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  logoutItems: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-home',
              routerLink: '/dashboard',
          },
          {
              label: 'Team',
              icon: 'pi pi-fw pi-users',
              routerLink: '/team',
          },
          {
            label: 'Analytics',
            icon: 'pi pi-fw pi-chart-bar',
          },
      ];

      this.logoutItems = [
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
        },
    ];
  }
}
