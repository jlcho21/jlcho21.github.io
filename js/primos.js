document.addEventListener('DOMContentLoaded', function () {
    const cantidadPrimosInput = document.getElementById('cantidadPrimos');
    const generarPrimosButton = document.getElementById('generarPrimos');
    const resultadoDiv = document.getElementById('resultado');

    generarPrimosButton.addEventListener('click', function () {
        const cantidadPrimos = parseInt(cantidadPrimosInput.value);

        if (!isNaN(cantidadPrimos)) {
            const primos = generarNumerosPrimos(cantidadPrimos);
            mostrarPrimos(primos);
        }
    });

    function generarNumerosPrimos(n) {
        const primos = [];
        let numero = 2;

        while (primos.length < n) {
            if (esPrimo(numero)) {
                primos.push(numero);
            }
            numero++;
        }

        return primos;
    }

    function esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    function mostrarPrimos(primos) {
        resultadoDiv.innerHTML = '';
        primos.forEach(function (primo) {
            const resultadoPrimo = document.createElement('div');
            resultadoPrimo.classList.add('resultado-primos');
            resultadoPrimo.textContent = primo;
            resultadoDiv.appendChild(resultadoPrimo);
        });
    }
});
