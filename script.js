// Captura de elementos de HTML
const entradaTarea = document.getElementById('task-input');
const agregarBoton = document.getElementById('add-btn');
const listaTareas = document.getElementById('task-list');
const estadoVacio = document.getElementById('empty-state');
const contadorTareas = document.getElementById('task-counter');
const contadorCompletadas = document.getElementById('completed-count');
const contadorTotal = document.getElementById('total-count');
const subtitulo = document.getElementById('subtitle');

// Variables de contadores
let totalTareas = 0;
let tareasCompletadas = 0;

// Función para actualizar la vista y los contadores
function updateUI() {
   if (totalTareas === 0) {
       estadoVacio.classList.remove('hidden');
       contadorTareas.classList.add('hidden');
       subtitulo.textContent = "Add something to get started";
   } else {
       estadoVacio.classList.add('hidden');
       contadorTareas.classList.remove('hidden');
       subtitulo.textContent = `${totalTareas - tareasCompletadas} pending tasks`;
   }
   // Actualizar contadores
   contadorCompletadas.textContent = tareasCompletadas;
   contadorTotal.textContent = totalTareas;
}

// Función para agregar tarea
agregarBoton.addEventListener('click', () => {
   const textoTarea = entradaTarea.value.trim();
   if (textoTarea === "") return;
   totalTareas++;
   // Crear el elemento <li>
   const elementoLista = document.createElement('li');
   const texto = document.createElement('span');
   texto.textContent = textoTarea;
   // Crear el botón de eliminar
   const botonEliminar = document.createElement('button');
   botonEliminar.textContent = '✕';
   botonEliminar.classList.add('delete-btn');
   // Evento para marcar/desmarcar como completada
   elementoLista.addEventListener('click', (e) => {
       // Evitar que hacer clic en la "X" marque la tarea como completada
       if (e.target !== botonEliminar) {
           elementoLista.classList.toggle('completed');
           if (elementoLista.classList.contains('completed')) {
               tareasCompletadas++;
           } else {
               tareasCompletadas--;
           }
           updateUI();
       }
   });

   // Evento para eliminar la tarea de la lista
   botonEliminar.addEventListener('click', () => {
       listaTareas.removeChild(elementoLista);
       totalTareas--;
       if (elementoLista.classList.contains('completed')) {
           tareasCompletadas--;
       }
       updateUI();
   });

   // Ensamblar y agregar a HTML
   elementoLista.appendChild(texto);
   elementoLista.appendChild(botonEliminar);
   listaTareas.appendChild(elementoLista);
   
   // Vaciar el input después de agregar
   entradaTarea.value = "";
   updateUI();
});