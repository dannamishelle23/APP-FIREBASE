import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})

export class HomePage {
  option: string | null = null;
  content: any = null;
  loading = false;

  constructor(private auth: AuthService, private api: ApisService, private router: Router) {}
  async selectOption(opcion: string) {
    this.option = opcion;
    this.loading = true;
    this.content = null;

    try {
      if (opcion === 'joke') {
        const data: any = await this.api.getJoke().toPromise();
        this.content = data;
      } else if (opcion === 'cat') {
        const data: any = await this.api.getCat().toPromise();
        this.content = data[0];
      } else if (opcion === 'dog') {
        const data: any = await this.api.getDog().toPromise();
        this.content = data;
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  backToMenu() {
    this.option = null;
    this.content = null;
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}