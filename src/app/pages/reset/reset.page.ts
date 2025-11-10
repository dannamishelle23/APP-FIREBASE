import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
  email = '';
  mensaje = '';
  loading = false;

  constructor() { }

  ngOnInit() {
  }

}
