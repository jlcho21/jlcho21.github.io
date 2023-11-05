function resolverEcuacionCuadratica() {
    // Obtener los coeficientes de la ecuación
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Calcular el discriminante
    const discriminante = b * b - 4 * a * c;

    // Calcular las soluciones
    if (discriminante > 0) {
        const solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('solucion1').textContent = 'Solución 1: ' + solucion1;
        document.getElementById('solucion2').textContent = 'Solución 2: ' + solucion2;
    } else if (discriminante === 0) {
        const solucion = -b / (2 * a);
        document.getElementById('solucion1').textContent = 'Solución única: ' + solucion;
        document.getElementById('solucion2').textContent = '';
    } else {
        document.getElementById('solucion1').textContent = 'No hay soluciones reales.';
        document.getElementById('solucion2').textContent = '';
    }
}
