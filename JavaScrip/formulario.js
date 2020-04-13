var formulario;
var elementos;
var boton;
var validarNombre;
var validarRadio;
var validarCheckbox;
var validar;


(function () {

 formulario = document.getElementsByName('formulario')[0];
 elementos = formulario.elements;
 boton= document.getElementById('btn');

validarNombre=function (e) {
if (formulario.nombre.value==0) {
  alert("Completa el campo Nombre");
  e.preventDefault();
}
}
validarRadio = function (e) {
  if (formulario.genero[0].checked == true || formulario.genero[1].checked == true) {
  }else {
    alert("completa el campo del genero");
    e.preventDefault();
  }
}

validarCheckbox=function (e) {
  if (formulario.Terminos.checked==true) {
}else {
    alert(" no has completado el campo de terminos y condiciones");
    e.preventDefault();

  }

}

 validar = function (e) {
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
 }

 formulario.addEventListener("submit",validar);


}())
