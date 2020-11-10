import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../services/local-storage/local-storage.service';

@Component({
  selector: 'bizbo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor(private router: Router, private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  /* Log User Out */
  logout(): void {
    this.localStorage.removeAllLocals();
    this.router.navigate(['/login']);
  }
}
