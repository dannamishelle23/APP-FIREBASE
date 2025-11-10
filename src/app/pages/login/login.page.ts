import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  mensaje = '';
  loading = false;

  //Errores de Firebase
  private ERROR_MESSAGES: Record<string, string> = {
    'auth/invalid-email': 'El formato del correo no es válido.',
    'auth/user-not-found': 'No existe una cuenta con ese correo.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/too-many-requests': 'Has intentado muchas veces. Intenta más tarde.',
    'auth/network-request-failed': 'Error de conexión. Revisa tu red.',
  };

  constructor(private auth: AuthService, private router: Router) {}

  async onLogin() {
    // Validación simple de campos vacíos
    if (!this.email || !this.password) {
      this.mensaje = 'Por favor completa todos los campos.';
      return;
    }

    this.loading = true;
    this.mensaje = '';

    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (e: any) {
      const code = e.code || '';
      // Usar el diccionario de errores para mostrar el mensaje adecuado
      this.mensaje = this.ERROR_MESSAGES[code] || 'Error al iniciar sesión.';
    } finally {
      this.loading = false;
    }
  }
}
