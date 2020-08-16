import panoramaSelect from './app'

// Uso addEventListener para escuchar los cambios mediante el evento click
boton1.addEventListener('click', function () {
    //se ejecuta función que muestra en HTML el resultado de mi función IIFE 
    //con el valor seleccionado, en este caso salidaMusica
    panoramaSelect.salidaMusica();
})

boton2.addEventListener('click', function () {
    //se ejecuta función que muestra en HTML el resultado de mi función IIFE 
    //con el valor seleccionado, en este caso salidaMusica
    panoramaSelect.salidaCine();
})

boton3.addEventListener('click', function () {
    //se ejecuta función que muestra en HTML el resultado de mi función IIFE 
    //con el valor seleccionado, en este caso salidaMusica
    panoramaSelect.salidaComida();
})