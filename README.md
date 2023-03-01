# Expediente Medico - FrontEnd

Este proyecto fue creado con Angular version 15.1.3.

## Ejecución

Para ejecutar el Proyecto, tenemos 2 opciones:
<ul>
<li>
Ejecutar el comando `ng serve`
</li>
<li>
Ejecutar el el comando `npm run start:proxy`.
</li>
<p>Esta opción, es porque se configuro un proxy con la finalidad de evitar los <i> errores</i> de <b> Cross Origin</b> 
</ul>

Con cual quiera opción se puede ver la aplicación ejecutandose desde el navegador con la url: `http://localhost:4200/`. 

## Construcción

Pero los elementos que se usaron para construir este avance fueron:
<ul>
  <li>
    componets
  </li> 
  <li>
    moduls
  </li>
  <li>
    service
  </li>
  <li>
    interface
  </li>
  <li>
    interceptors
  </li>
</ul>

### Modulos

Tomanto en cuenta, el desarrollo del Backend me enfoque en el desarrollo de un Modulo para las operaciones correspondientes a los Medicos, ademas de un modulo Shared para compartir componentes entre modulos como por ejemplo el componente IMG.

### Componentes

Sin embargo cuando inicie mi proyecto, cree algunos componentes y entre los mas importantes son:
<ul>
  <li>
    pacientes
  </li> 
  <li>
    no-encontrados
  </li>
  <li>
    home
  </li>
  <li>
    nav
  </li>
</ul> 

### Servicios

Se crearon varios elementos service, en donde se concentra la logica de negocio entre las que se encuentra la conexión a la API del Backend.

Entre los principales son:
<ul>
  <li>
    Auth:
  </li> 
  <p> En donde se maneja el Login en la apliación.</p>
  <li>
    Medico
  </li>
  <li>
    Paciente
  </li>
  <li>
    Token
  </li>
  <p> Donde se administra el token para validar si el usuario tiene los privilegios para hacer x o y operaciones en el sistema.
  <li>
    Usuarios
  </li>
</ul> 

### Models

<p> Se crearon apartir de <i> Interface</i> donde tenemos los siguientes: <br> Auth, Medico, Paciente, Rol y Usuario. <br> En donde se destaca la creación de DTO´s para crear y modificar apartir de estos usando:</p>

<ul>
  <li>
    Omit
  </li> 
  <li>
    Partial
  </li>
</ul> 
 
 ### Interceptors
 
 Se creo para que nos ayudaran con el tema del Token y para poder añadir este, acada petición Http.
 
 ## Extras
 
 Inclui a mi proyecta temas de Angular Material, Ng Mask para el tema de la validación de formularios y Swal para la alertas en caso de Errores.

