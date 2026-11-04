
const formulario = document.getElementById("pedidoForm");

function calcularTotal() {

    let cantidad = document.getElementById("cantidad").value;    

    let mensaje = document.getElementById("mensaje");    

    let totalTexto = document.getElementById("total");

    if (cantidad == "" || cantidad <= 0 || !Number.isInteger(Number(cantidad))) {
        mensaje.textContent = "Por favor, ingresa una cantidad válida (mínimo 1).";
        totalTexto.textContent = "$0.00";
        return;
    }

    mensaje.textContent = "";

    let especialidad = Number(document.getElementById("especialidad").value);

    let pan = Number(document.querySelector('input[name="pan"]:checked').value);

    let ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');

    let precioIngredientes = 0;

    ingredientes.forEach(function(ingrediente) {
        precioIngredientes += Number(ingrediente.value);
    });

    let domicilio = document.getElementById("domicilio").checked;

    let envio = domicilio ? 30 : 0;

    let total = (especialidad + pan + precioIngredientes) * Number(cantidad) + envio;

    totalTexto.textContent = "$" + total.toFixed(2);
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    calcularTotal();
});

formulario.addEventListener("change", calcularTotal);

document.getElementById("cantidad").addEventListener("input", calcularTotal);

calcularTotal();
