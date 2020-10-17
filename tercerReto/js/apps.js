
let botonAgregar = document.querySelector('.boton-agregar');
let botonEditar = document.querySelector('.boton-editar');
let botonRemover = document.querySelector('.boton-remover');
let list = document.getElementById('list');
const entrada = document.querySelector('.input');
let container = document.querySelector('.container');


botonAgregar.addEventListener('click', function(e){
    e.preventDefault();
    let parrafo = document.createElement('p');
    parrafo.innerHTML = entrada.value;
    list.appendChild(parrafo);
})