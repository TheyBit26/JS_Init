// Programa en el que creo una lista con mis datos

var nombre = "Dayvid Ramos M.";
var edad = 25;
var eresDesarrollador = true;
const fechaNacimiento = new Date ("august 26 1997");

// Creación del objeto 'Libro Favorito'
const libroFavorito = {

    titulo: "Fundamentos de circuitos eléctricos 5ta Edición", 
    autor: "Charles K. Alexander, Matthew N.O. Sadiku",
    fecha: new Date(2013,05,15),
    URL: "https://www.latecnicalf.com.ar/descargas/material/electrotecnia/Fundamentos%20de%20circuitos%20el%C3%A9ctricos,%205ta.%20Edici%C3%B3n%20-%20Charles%20K.%20Alexander.pdf"
}


var mis_Datos = [nombre, edad, eresDesarrollador, fechaNacimiento, libroFavorito];

console.log(mis_Datos);