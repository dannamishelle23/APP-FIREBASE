import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  //Crear usuario nuevo
  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Iniciar sesión
  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  async logout() {
    return await this.afAuth.signOut();
  }

  // Obtener estado del usuario autenticado
  get user() {
    return this.afAuth.authState;
  }
}
