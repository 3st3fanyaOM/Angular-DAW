# Angular-DAW
node -v
npm -v
ng version

ng n nombreProyecto //crear proyecto
cd nombreProyecto //entrar
ng s //levantar
ctrl c //bajar

ng s -p4201 //abrir en otro puerto
npm install //recuperar carpeta node modules
//<img src="/roma.webp" alt=""> //va a carpeta public

ng g m nombre_modulo //crear módulo

ng g c nombreComponente 
**importar en app.component.ts o compponente padre
**llamar en app-componente.html
<input type="text" [propiedad]="variable">
<h1 [innerHTML]="variable">//escribir en tag
//property binding

//evento soltar la tecla guarda valor de input
<input type="text" #nuevoDni (keyup)="(0)">
{{nuevoDni.value}}
