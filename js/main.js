let saludo =  prompt("Ingrese su nombre");

if (saludo !== "")
{alert(`Bienvenido a nuestra sitio web, ${saludo}`)}

else {alert ("Bienvenido a nuestra sitio web")}



let deseo = "Si / No"

let opciones = prompt(`¿Desea consultar un presupuesto para su sitio web?: ${deseo}`);

while(opciones != "ESC" ){
     
    if (opciones.toLowerCase() === "si"){
        let cantidad = parseInt(prompt("Comencemos con su presupuesto!. ¿Cuántas páginas quieres que tenga tu sitio web: 3, 5 ó 10?"));

    switch (cantidad){
        case 3 :
            alert("Tiene un valor de $30000");
            break;
        case 5 :
            alert("Tiene un valor de $45000");
            break;
        case 10:
            alert("Tiene un valor de $50000");
            break ; 

        default :
            alert("Opción inválida")
            break;           

    }
}

    else if (opciones.toLowerCase() === "no"){
        alert("Gracias por visitar nuestra web")
        break;
         
    }
     
    
}


