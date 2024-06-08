let api_key = "175c1e1f31490fe4ded0a255f089e346";
let difKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => mostrarDatosClima(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const ciudadTemperatura = data.main.temp;
    const descripcion = data.weather[0].description; // Corregido de "whather" a "weather" y de "descripcion" a "description"

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(ciudadTemperatura - difKelvin)}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
}