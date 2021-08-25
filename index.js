
//Validamos para la cadena de entrada
function validateCadena() {

    //obtenemos el valor del campo y los transformamos en una array
    const value = document.getElementById("inputForm").value.split("");

    //Variable para ir sumando los numeros
    let number = 0;
    //Variable para ir contando los signos de interrogacion
    let numberInterrogatorio = 0;
    //Bandera para validar si la cadena de caracteres es correcta
    let bandera = false;

    //recorremos los valor del campo
    value.map((item, key) => {

        //Validamos si el valor del caracter el un numero
        if (parseInt(item)) {
            //Sumamos los numeros
            number = parseInt(item) + number;

            //Validamos si ya hay 3 signos de interrogacion cuando se esta sumando los numeros
            if (numberInterrogatorio === 3) {
                //Si el numero da 10 la cadena es exitosa y se actualiza la bandera
                if (number === 10) {
                    bandera = true;
                }

                //reiniciamos las variables
                number = 0;
                numberInterrogatorio = 0;
            }
        }

        //Validamos si el caracter es un signo de interrogacion y lo sumamos al contador.
        if (item === "?" && number > 0) {
            numberInterrogatorio++;
        }
    })

    //Actualizamos el DOM con la informacion
    document.getElementById("validateText").innerHTML = bandera;
    document.getElementById("alertValidateText").style.display = "block";

}

//Validacion de la cadena de texto mas larga
function validateString() {
    //Capturamos el valor del campo y lo divimos en un array
    const value = document.getElementById("inputString").value.split(" ");
    //Declaramos la variable que devolvemos en la respuesta
    let letterReturn = "";

    //Recorremos el array
    value.map(item => {
        //Eliminamos los caracteres especiales
        item = item.replace(/[^a-zA-Z ]/g, "");
        //Validamos si esta cadena es mas larga a la actual y de ser asi actualizamos la informacion
        if (letterReturn.length < item.length) letterReturn = item
    })

    //Actualizamos el DOM con la informacion
    document.getElementById("alertValidateString").innerHTML = letterReturn;
    document.getElementById("alertValidateString").style.display = "block";

}


//Funcion para calcular el procentaje de venta
function calcularComision() {
    //Obtenemos la informacion de los campos
    let inputSale = document.getElementById("inputSale").value;
    let inputPorcetanje = document.getElementById("inputPorcetanje").value;

    //Alzamos el api con la informacion necesaria
    axios.get('./index.php?sale=' + inputSale + '&porcentaje=' + inputPorcetanje).then(function (response) {
        //Actualizamos el DOM con la informacion
        document.getElementById("alertValidateComision").innerHTML = response.data.info;
        document.getElementById("alertValidateComision").style.display = "block";
    }).catch(function (error) {
        console.log(error);
    });
}