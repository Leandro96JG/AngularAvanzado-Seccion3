import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
   menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/page',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Graphics',
          url: 'grafica1',
        },
      ],
    },
  ];

  constructor() {}
}
