import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Registro del usuario
  async register(email: string, password: string) {
    //Crear el usuario en Firebase
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    //Enviar el correo de verificación al usuario
    await userCredential.user?.sendEmailVerification();
    return userCredential;
  }

  // Iniciar sesión
  async login(email: string, password: string) {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
    if (!userCredential.user?.emailVerified) {
      await this.afAuth.signOut();
      throw new Error('Tu cuenta no está verificada. Revisa tu correo electrónico.');
    }
    return userCredential;
  }

  // Recuperar contraseña
  async resetPassword(email: string): Promise<string> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      return 'Correo de recuperación enviado. Revisa tu bandeja de entrada.';
    } catch (error: any) {
      throw new Error(error.message);
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
