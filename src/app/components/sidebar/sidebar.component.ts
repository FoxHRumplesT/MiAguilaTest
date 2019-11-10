import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public menuOptions: Array<{ label: string, path: string }> = [
    { label: 'Pedir aguila', path: 'request-aguila' },
    { label: 'Vuelos', path: 'flights' },
    { label: 'Rutas', path: 'routes' },
    { label: 'Administrar', path: 'admin' },
    { label: 'Estadisticas', path: 'statistics' },
    { label: 'Medios de pago', path: 'pay-methods' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
