document.addEventListener("DOMContentLoaded", function() {
    const mcmForm = document.getElementById("mcmForm");
    const mcmResult = document.getElementById("mcmResult");

    mcmForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const num1 = parseInt(mcmForm.num1.value, 10);
        const num2 = parseInt(mcmForm.num2.value, 10);

        if (isNaN(num1) || isNaN(num2)) {
            mcmResult.innerHTML = "Ingresa dos números válidos para calcular el MCM.";
            return;
        }

        const mcm = calcularMCM(num1, num2);

        mcmResult.innerHTML = `El MCM de ${num1} y ${num2} es ${mcm}.`;
    });

    function calcularMCM(a, b) {
        // Implementación del algoritmo de Euclides
        const gcd = calcularMCD(a, b);
        const mcm = (a * b) / gcd;
        return mcm;
    }

    function calcularMCD(a, b) {
        // Algoritmo de Euclides para calcular el MCD (Máximo Común Divisor)
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
});
