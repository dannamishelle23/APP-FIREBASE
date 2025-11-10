import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false})

export class RegistroPage {

  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onRegister() {
    this.loading = true;
    try {
      await this.auth.register(this.email, this.password);
      alert('Registro exitoso! Revisa tu correo para verificar tu cuenta.');
      this.router.navigate(['/home']);
    } catch (e: any) {
      alert('Error al registrarse: ' + e.message);
    } finally {
      this.loading = false;
  }
  }
}

