document.addEventListener("DOMContentLoaded", function() {
    const conversionForm = document.getElementById("conversionForm");
    const conversionResult = document.getElementById("conversionResult");

    conversionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const decimalNumber = parseInt(conversionForm.decimalNumber.value, 10);
        const targetBase = parseInt(conversionForm.targetBase.value, 10);

        if (isNaN(decimalNumber) || isNaN(targetBase)) {
            conversionResult.innerHTML = "Ingresa un número válido en base 10 y selecciona una base de destino.";
            return;
        }

        let convertedNumber;
        if (targetBase === 16) {
            convertedNumber = decimalNumber.toString(targetBase).toUpperCase(); // Convertir a minúsculas
        } else {
            convertedNumber = decimalNumber.toString(targetBase);
        }

        conversionResult.innerHTML = `El número ${decimalNumber} en base 10 es igual a ${convertedNumber} en base ${targetBase}.`;
    });
});
