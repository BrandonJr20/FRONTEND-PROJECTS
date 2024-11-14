async function obtenerDatos() {
    try {
        const respuesta = await fetch('data.json');
        if (!respuesta.ok) {
            throw new Error("Error en la petición");
        }

        const datos = await respuesta.json();
        mostrarTareas(datos, 'daily'); // Mostrar las tareas diarias por defecto

        // Asignar eventos a los botones
        document.getElementById('Day').addEventListener('click', () => mostrarTareas(datos, 'daily'));
        document.getElementById('Week').addEventListener('click', () => mostrarTareas(datos, 'weekly'));
        document.getElementById('Month').addEventListener('click', () => mostrarTareas(datos, 'monthly'));

    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarTareas(tareasData, periodo) {
    const tareasContainer = document.getElementById('tareas');
    tareasContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar las tareas

    tareasData.forEach((tarea) => {
        // Crear el contenedor de la tarea
        const tareaDiv = document.createElement('div');
        tareaDiv.classList.add('tarea');

        // Generar la estructura HTML con los datos de la tarea según el periodo
        tareaDiv.innerHTML = `
        <div class="descripcion-tarea">
          <div class="opciones-tarea">
            <h2 class="tituloEvento">${tarea.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="boton para opciones">
          </div>

          <div class="date-tarea">
            <span class="current">${tarea.timeframes[periodo].current} hrs </span>
            <span class="previous"> Last ${capitalize(periodo)} ${tarea.timeframes[periodo].previous} hrs</span>
          </div>
        </div>
      `;

        // Añadir la tarea generada al contenedor principal
        tareasContainer.appendChild(tareaDiv);
    });
}

// Función para capitalizar el primer carácter de un string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Ejecutar la función para obtener y mostrar los datos
obtenerDatos();
