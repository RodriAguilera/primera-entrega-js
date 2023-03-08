// PRIMER ENTREGA

// let saludo =  prompt("Ingrese su nombre");

// if (saludo !== "")
// {alert(`Bienvenido a nuestra sitio web, ${saludo}`)}

// else {alert ("Bienvenido a nuestra sitio web")}

// let deseo = "Si / No"

// let opciones = prompt(`¿Desea consultar un presupuesto para su sitio web?: ${deseo}`);

// while(opciones != "ESC" ){
     
//     if (opciones.toLowerCase() === "si"){
//         let cantidad = parseInt(prompt("Comencemos con su presupuesto!. ¿Cuántas páginas quieres que tenga tu sitio web: 3, 5 ó 10?"));

//     switch (cantidad){
//         case 3 :
//             alert("Tiene un valor de $30000");
//             break;
//         case 5 :
//             alert("Tiene un valor de $45000");
//             break;
//         case 10:
//             alert("Tiene un valor de $50000");
//             break ; 

//         default :
//             alert("Opción inválida")
//             break;           

//     }
// }

//     else if (opciones.toLowerCase() === "no"){
//         alert("Gracias por visitar nuestra web")
//         break;
         
//     }
     
    
// }




// SEGUNDA ENTREGA



// En esta oportunidad simulé que un cliente me pidió un sitio web de artículos deportivos



let temas = prompt("Ingrese el tema de su sitio web");
let color = prompt("Ingrese la paleta de colores que desea en su sitio web");
let description = prompt("Ingrese una breve descripción para su sitio web");
let mensaje = `Su sitio web será de ${temas}, en los colores ${color}, y se describirá como: ${description}`;
  alert(mensaje);

  // FUNCION

const sitio = {
    tema: "Deportes",
    colores: "rojo, gris y negro",
    descripcion: "Sitio de artículos deportivos en Córdoba"
  };
  
  function infoSitio(sitio) {
    console.log(`Nombre: ${sitio.tema}`);
    console.log(`Precio: ${sitio.colores}`);
    console.log(`Descripción: ${sitio.descripcion}`);
  }
  
  infoSitio(sitio);

 
  
// OBJETO

class Producto{
    constructor(nombre, precio, descripcion){

    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;

  }};
  
    const producto1 = new Producto("Adidas Galaxy6", 21000, "Calzado de rendimiento medio, suela de impacto resistente, para correr de 10 a 20k.")
    const producto2 = new Producto("Nike Airzoom Pegasus39", 50000, "Calzado de alto rendimiento, sistema de camara de aire interna, para correr de 20 a 45k.")

    console.log(producto1);
    console.log(producto2);

// ARREGLO

const productos = [
  { id: 1, nombre: "Remera", precio: 12000 },
  { id: 2, nombre: "Pantalón", precio: 30000 },
  { id: 3, nombre: "Zapatilla", precio: 50000 },
  { id: 4, nombre: "Mochila", precio: 10000 }
];

function buscarProducto(nombre) {
  let resultados = [];
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1) {
      resultados.push(productos[i]);
    }
  }
  return resultados;
}


const resultadosBusqueda = buscarProducto("Remera");
console.log(resultadosBusqueda);
