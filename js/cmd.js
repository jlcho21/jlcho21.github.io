document.addEventListener("DOMContentLoaded", function() {
    const mcdForm = document.getElementById("mcdForm");
    const mcdResult = document.getElementById("mcdResult");

    mcdForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const num1 = parseInt(mcdForm.num1.value, 10);
        const num2 = parseInt(mcdForm.num2.value, 10);

        if (isNaN(num1) || isNaN(num2)) {
            mcdResult.innerHTML = "Ingresa dos números válidos para calcular el MCD.";
            return;
        }

        const mcd = calcularMCD(num1, num2);
        const divisores = encontrarDivisoresComunes(num1, num2);

        mcdResult.innerHTML = `El MCD de ${num1} y ${num2} es ${mcd}.<br>Divisores comunes: ${divisores.join(', ')}`;
    });

    function calcularMCD(a, b) {
        // Implementación del algoritmo de Euclides para calcular el MCD
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function encontrarDivisoresComunes(a, b) {
        const min = Math.min(a, b);
        const divisores = [];
        for (let i = 1; i <= min; i++) {
            if (a % i === 0 && b % i === 0) {
                divisores.push(i);
            }
        }
        return divisores;
    }
});
