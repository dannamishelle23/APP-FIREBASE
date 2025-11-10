import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
  standalone: false
})
export class ResetPage {
  email = '';
  mensaje = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onReset() {
    if (!this.email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }
    this.loading = true;
    try {
      this.mensaje = await this.auth.resetPassword(this.email);
    } catch  (e: any) {
      this.mensaje = 'Error al restablecer contraseña: ' + e.message;
    } finally {
      this.loading = false;
    }
  }

}
