## Aplicacion con API REST

El objetivo es crear una APK que consuma N Api Rest's. 
Los requisitos son los siguientes:
- La APK debe tener registro, recuperación de contraseña, confirmación de cuenta y login.
- Debe estar desplegada en Firebase Hosting. 

### Implementacion de las funcionalidades

Se crea las funcionalidades en auth.ts

### 1. Registro

![registro](registro.png)

Esta función register se encarga de:

- Crear una nueva cuenta de usuario en Firebase Authentication con el correo y la contraseña.

- Enviar un correo electrónico de verificación a esa dirección para que el usuario pueda confirmar que le pertenece.

- Devolver la información de la sesión del usuario recién creado.

Además, se hace modificación  en  registro.page.ts

![registro.ts](registro-ts.png)

En este caso, intenta llamar a un servicio de autenticación para crear el nuevo usuario con el correo y la contraseña proporcionados. 
- Si el registro es exitoso, muestra un mensaje de alerta al usuario y lo redirige a la página de inicio.
- Si ocurre un error, muestra un mensaje de alerta con el error. 

