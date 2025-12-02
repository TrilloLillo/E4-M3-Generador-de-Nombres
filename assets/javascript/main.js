const nombre = document.getElementById("Nombre");
const apellido = document.getElementById("Apellido");

const nombreInicial = nombre.value.slice(0, 1).toLowerCase();
const apellidoInicial = apellido.value.slice(0, 3).toLowerCase();

const numeros = Math.floor(Math.random(0) * 90 + 10);

const nombreUsuario = nombreInicial.concat(apellidoInicial + numeros);

console.log(nombreUsuario);

document.getElementById("Resultado").innerHTML += "<h2>"+nombreUsuario+"</h2>" ;