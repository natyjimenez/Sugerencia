//Función IIFE 
const panoramaSelect = (() => {
    //Función PRIVADA con contenido para panorama música
    let musicaPrivada = () => {
        resultado.innerHTML = ` <p>Sugerencia Música<p>
        <div class= "video-responsive"><iframe src="https://www.youtube.com/embed/f4Mc-NYPHaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>
        `;
    };
    //Función PRIVADA con contenido para panorama Cine
    let cinePrivada = () => {
        resultado.innerHTML = ` <p>Sugerencia Cine<p>
        <div class= "video-responsive"><iframe src="https://www.youtube.com/embed/3No2ro4xfo4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>
        `;
    };
    //Función PRIVADA con contenido para panorama Comida
    let comidaPrivada = () => {
        resultado.innerHTML = ` <p>Sugerencia Comida<p>
        <img src="img/hamburguesas1.jpg" class="imgSelect">
        `;
    };
    return {
        //Función PÚBLICA de panórama música
        salidaMusica: () => {
            musicaPrivada();
        },
        //Función PÚBLICA contenido Cine
        salidaCine: () => {
            cinePrivada();
        },
        //Función PÚBLICA contenido Comida
        salidaComida: () => {
            comidaPrivada();
        },

    };
})();

export default panoramaSelect;