
class Product {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularDetalle() {
        return this.precio * this.cantidad;
    }
}

const arrayProductos = [];

function iniciar() {
    const agregarBtn = document.getElementById("agregar");
    const frmproduct = document.getElementById("frmproduct");

    agregarBtn.addEventListener("click", function (event) {
        event.preventDefault();
        agregarProducto(frmproduct);
    });

    frmproduct.addEventListener("submit", function (event) {
        event.preventDefault(); 
    });
}

function agregarProducto(form) {
    const nombre = form.txtproducto.value;
    const precio = parseFloat(form.txtprecio.value);
    const cantidad = parseInt(form.txtcantidad.value);

    const producto = new Product(nombre, precio, cantidad);
    arrayProductos.push(producto);

    mostrarProductosEnTabla();
    calcularTotalVenta();
    limpiarFormulario(form);
}

function mostrarProductosEnTabla() {
    const listaProductos = document.getElementById("listaproductos");
    listaProductos.innerHTML = "";

    arrayProductos.forEach((producto) => {
        const row = listaProductos.insertRow();
        const nombreCell = row.insertCell(0);
        const precioCell = row.insertCell(1);
        const cantidadCell = row.insertCell(2);
        const detalleCell = row.insertCell(3);

        nombreCell.textContent = producto.nombre;
        precioCell.textContent = producto.precio.toFixed(2);
        cantidadCell.textContent = producto.cantidad;
        detalleCell.textContent = producto.calcularDetalle().toFixed(2);
    });
}

function calcularTotalVenta() {
    const totalVentaSpan = document.getElementById("totalventa");
    const totalVenta = arrayProductos.reduce((total, producto) => total + producto.calcularDetalle(), 0);
    totalVentaSpan.textContent = totalVenta.toFixed(2);
}

function limpiarFormulario(form) {
    form.reset();
}

if (window.addEventListener) {
    window.addEventListener("load", iniciar, false); 
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar); 
}