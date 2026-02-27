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
