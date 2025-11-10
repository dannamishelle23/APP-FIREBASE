import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  //Crear usuario nuevo
  async register(email: string, password: string) {
    try {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    alert('Registro exitoso! Ahora puedes iniciar sesión.');
  } catch (e: any) {
    alert('Error al registrarse: ' + e.message);
  }}

  // Iniciar sesión
  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      alert('Inicio de sesión exitoso!');
    } catch (e: any) {
      alert('Error al iniciar sesión: ' + e.message);
  }}

  // Recuperar contraseña
  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      alert('Revisa tu correo para restablecer la contraseña.');
    } catch (e: any) {
      alert('Error al enviar el correo de restablecimiento: ' + e.message);
  }}

  // Cerrar sesión
  async logout() {
    return await this.afAuth.signOut();
  }

  // Obtener estado del usuario autenticado
  get user() {
    return this.afAuth.authState;
  }
}
