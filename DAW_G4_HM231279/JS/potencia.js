class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = this.calcularPotencia();
    }

    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }

    mostrarResultadoEnPagina() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `El resultado de ${this.base}^${this.exponente} es: ${this.resultado}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const potenciaForm = document.getElementById('potenciaForm');

    potenciaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const base = parseFloat(document.getElementById('base').value);
        const exponente = parseInt(document.getElementById('exponente').value);

        const potenciaObj = new Potencia(base, exponente);
        potenciaObj.mostrarResultadoEnPagina();
    });
});
