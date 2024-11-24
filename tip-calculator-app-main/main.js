// Declarar variables
const totalInput = document.getElementById('total');
const tipButtons = document.querySelectorAll('.tip-buttons button');
const customTipInput = document.getElementById('custom');
const cantidadPersonasInput = document.getElementById('cantidadPersonas');
const propinaPersonaOutput = document.getElementById('propinaPersona');
const totalPersonaOutput = document.getElementById('totalPersona');
const resetButton = document.getElementById('reset');

// Función para calcular y mostrar resultados
function calcularPropinas(tipPercentage) {
  const totalBill = parseFloat(totalInput.value) || 0;
  const cantidadpersonas = parseInt(cantidadPersonasInput.value) || 1;

  // Validación: El número de personas no puede ser 0
  if (cantidadpersonas <= 0) {
    alert('El número de personas debe ser mayor a 0.');
    return;
  }

  // Cálculos
  const tipAmount = (totalBill * tipPercentage) / 100;
  const totalAmount = totalBill + tipAmount;

  // Resultados por persona
  const tipPerPerson = tipAmount / cantidadpersonas;
  const totalPerPerson = totalAmount / cantidadpersonas;

  // Mostrar resultados
  propinaPersonaOutput.value = tipPerPerson.toFixed(2);
  totalPersonaOutput.value = totalPerPerson.toFixed(2);
}

// Evento para calcular el porcentaje seleccionado
tipButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tipPercentage = parseInt(button.value);
    calcularPropinas(tipPercentage);
  });
});

// Evento para la entrada personalizada de porcentaje
customTipInput.addEventListener('input', () => {
  const customTip = parseFloat(customTipInput.value);

  // Validar que el valor ingresado sea un número válido
  if (isNaN(customTip) || customTip < 0) {
    alert('Por favor, ingrese un porcentaje válido.');
    return;
  }

  calcularPropinas(customTip);
});

// Evento para resetear los valores
resetButton.addEventListener('click', () => {
  totalInput.value = '';
  cantidadPersonasInput.value = '';
  customTipInput.value = '';
  propinaPersonaOutput.value = '0.00';
  totalPersonaOutput.value = '0.00';
});
