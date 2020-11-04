import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../string-resources';

@Component({
  selector: 'app-cube3-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  readonly MAIN_HEADER = Constants.MAIN_HEADER;
  readonly CARDS = Constants.MENU_CARDS;
  readonly ABOUT = Constants.MENU_ABOUT;
  readonly REGISTER = Constants.MENU_REGISTER;
  readonly LOGIN = Constants.MENU_LOGIN;

  constructor() { }

  ngOnInit(): void {
  }

}
