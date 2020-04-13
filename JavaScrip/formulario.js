var formulario;
var elementos;
var boton;
var validarNombre;
var validar;


(function () {

 formulario = document.getElementsByName('formulario')[0];
 elementos = formulario.elements;
 boton= document.getElementById('btn');

validarNombre=function () {
if (formulario.nombre.value==0) {
  alert("Completa el campo Nombre");
}
}

 validar = function () {
    validarNombre();
 }

 formulario.addEventListener("submit",validar);


}())
