var formulario;
var elementos;
var boton;


(function () {

 formulario = document.getElementsByName('formulario')[0];
 elementos = formulario.elements;
 boton= document.getElementById('btn');

var validarNombre=function () {
if (formulario.nombre.value==0) {
  alert("Completa el campo Nombre");
}
}

var validar = function () {
    validarNombre();
 }

 formulario.addEventListener("submit",validar);


}())
