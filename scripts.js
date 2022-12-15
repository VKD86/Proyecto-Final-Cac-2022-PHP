console.log("OK");

//VALIDACIONES FORMULARIO ORADOR

const nombre = document.getElementById("idNombre");

const apellido = document.getElementById("idApellido");

const mensajeFormulario = document.getElementById("idMensaje");

const botonEnviar = document.getElementById("idEnviar");

const reseteo_formulario = document.getElementById("_formulario_oradores_");

function validarNombre() {
    if (nombre.value.length <= 1) {
        mensajeNombre.innerHTML = "Por favor, ingrese un nombre válido";   
    } else {
        mensajeNombre.innerHTML = " ";
    }
    };

function validarApellido() {
  if (apellido.value.length <=1) {
        mensajeApellido.innerHTML = "Por favor, ingrese un apellido válido";   
    }  else {
        mensajeApellido.innerHTML = " ";
    }
};

function validarMensaje() {
    if (mensajeFormulario.value.length <=14) {
        mensajeForm.innerHTML = "Por favor, coméntenos con más detalle qué tema quisiera abordar en su charla";
    } else {
        mensajeForm.innerHTML = " ";
    }
    };

function alertas() {
    if (nombre.value.length > 1 && apellido.value.length > 1 && mensajeFormulario.value.length >=15){
            
    } else {
            alert("Complete todos los campos");
    }
    }; 
    

/*    
function reset() {
    if (nombre.value.length > 1 && apellido.value.length > 1 && mensajeFormulario.value.length >=15){
        reseteo_formulario.reset();
        alert("Sus datos se han enviado correctamente.");
    } else {
        alert("Complete todos los campos");
    } 
};*/

//Modifiqué evento onclick por onfocusout para que las validaciones se vean antes 
//de enviar el formulario

/*botonEnviar.addEventListener("click", validarNombre);*/
/*botonEnviar.addEventListener("click", validarApellido);*/
/*botonEnviar.addEventListener("click", validarMensaje);*/
/*botonEnviar.addEventListener("click", reset);*/   //esta funcion genera el envio del formulario vacio

botonEnviar.addEventListener("click", alertas);

// FUNCIONES BOTONES "COMPRAR TICKETS" (despliega sección oculta)

const btnCompra = document.getElementById("idComprarTickets");

btnCompra.addEventListener("click", function() {
    const seccionOculta = document.getElementById("seccionCompra");
    
    if (seccionOculta.classList.contains("d-none")) {
        seccionOculta.classList.remove("d-none");
    } else {
        seccionOculta.classList.add("d-none");
    }
});

const button = document.getElementById("idComprarTickets2");

button.addEventListener("click", function() {
    const seccionOculta = document.getElementById("seccionCompra");
    
    if (seccionOculta.classList.contains("d-none")) {
        seccionOculta.classList.remove("d-none");
        
    } else {
        seccionOculta.classList.add("d-none");
    }
});


//VALIDACIONES FORMULARIO DE COMPRA (nombre, apellido, email, cantidad)

const btnResumen = document.getElementById("btnResumen");

const nombre2 = document.getElementById("inputNombre");

const apellido2 = document.getElementById("inputApellido");

var formatoMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const qTickets = document.getElementById("inputCantidad"); 

function validacionNombre() {
    
    if (nombre2.value.length <=1) {
        alertaNombre.innerHTML= "Ingrese un nombre válido";
    }
};

function validacionApellido() {
    
    if (apellido2.value.length <=1) {
        alertaNombre.innerHTML= "Ingrese un nombre válido";
    }
};

function validarEmail() {

    if (inputCorreoElectronico.value.match(formatoMail)) {

    }
    else
        {idEmail.innerHTML = "Ingrese un e-mail válido";

        }
};

function validacion_Q_Tickets() {
    
    if (qTickets.value >10) {
        alertaTickets.innerHTML= "Transacción no procesada. Máximo de 10 tickets por persona";
    }
};

btnResumen.addEventListener("click", validacionNombre);
btnResumen.addEventListener("click", validacionApellido);
btnResumen.addEventListener("click", validarEmail);
btnResumen.addEventListener("click", validacion_Q_Tickets);

// FUNCION DETALLAR COMPRA (indica el precio a pagar por la venta de entradas 
//teniendo en cuenta los descuentos vigentes)

function detallarCompra() {
    
let cantidadTickets = document.getElementById("inputCantidad").value; 

let categoriaSeleccionada = document.getElementById("selectCategoria").value;

const valorTicket = 200;

const multiplicacion = cantidadTickets * valorTicket;

    if (categoriaSeleccionada === "1") {
        totalCompra.innerHTML = "Total a Pagar: $ " + multiplicacion;
    } else {
        switch (categoriaSeleccionada) {
        
         case "0": alertaCategoria.innerHTML = "Seleccione una categoría"

         case "2":
        
                 totalCompra.innerHTML = "Total a Pagar: $ " + ((multiplicacion*20)/100)
                 break;
                
             case "3": 
             
                 totalCompra.innerHTML = "Total a Pagar: $ " + ((multiplicacion*50)/100)
                 break;
            
             case "4": 
            
                 totalCompra.innerHTML = "Total a Pagar: $ " + ((multiplicacion*85)/100)
                 break;
             }
        }   
};

btnResumen.addEventListener("click", detallarCompra);


// FUNCION BORRAR (borra el formulario de compra)

const btnBorrar = document.getElementById("btnBorrar");

function borrar() {
    totalCompra.innerHTML = "Total a Pagar: $"
    alertaNombre.innerHTML= ""
    idEmail.innerHTML = ""
    alertaTickets.innerHTML = ""
    alertaCategoria.innerHTML = ""
}

btnBorrar.addEventListener("click", borrar);






