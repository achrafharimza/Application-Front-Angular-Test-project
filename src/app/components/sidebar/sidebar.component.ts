import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'Dashboard',
    icon: 'dashboard',
    class: 'active-pro',
  },

  {
    path: '/tablelist',
    title: 'Table List',
    icon: 'content_paste',
    class: '',
  },
  {
    path: '/fileupload',
    title: 'File-Upload',
    icon: 'library_books',
    class: '',
  },
  { path: '/settings', title: 'Settings', icon: 'settings', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  // {
  //   path: '/notifications',
  //   title: 'Notifications',
  //   icon: 'notifications',
  //   class: '',
  // },
  // {
  //   path: '/upgrade',
  //   title: 'Upgrade to PRO',
  //   icon: 'unarchive',
  //   class: 'active-pro',
  // },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  currentuser: any = null;
  menuItems: any[] | undefined;
  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.tokenService.authStatus.subscribe((res) => {
      this.currentuser = this.tokenService.getInfos();
      console.log('currentuserNG : ', this.currentuser);
    });
  }

  logout() {
    this.tokenService.remove();
    this.tokenService.changeStatus(false);
    this.router.navigateByUrl('/login');
  }
}
