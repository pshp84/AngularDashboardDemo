import { Menu } from '@/interface';
import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  MENUITEMS: Menu[] =[
    { title: 'Dashboard', path: '/', icon: 'home', type: 'link', active: true },
    { title: 'Deliveries', path: '/', icon: 'home', type: 'link', active: true },
    { title: 'Users', path: '/', icon: 'home', type: 'link', active: true },
    { title: 'Settings', path: '/', icon: 'home', type: 'link', active: true },
  ] 
}
