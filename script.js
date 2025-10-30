function actualizarHora() {
    const ahora = new Date();

    const opcionesFecha = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    document.getElementById("fecha").textContent = ahora.toLocaleDateString("es-ES", opcionesFecha);
    
    document.getElementById("hora").textContent = ahora.toLocaleTimeString("es-ES");
}

setInterval(actualizarHora, 1000);
actualizarHora();

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                document.getElementById("ubicacion").textContent =
                    `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
            },
            () => {
                document.getElementById("ubicacion").textContent = "Permiso denegado";
            }
        );
    } else {
        document.getElementById("ubicacion").textContent = "No soportado por tu navegador";
    }
}

obtenerUbicacion();
