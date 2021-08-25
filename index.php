<?php

//Validamos que la peticion sea de metodo POST
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    //Validamos que los campos en la peticion sean los corectos
    if(isset($_GET["sale"])  || isset($_GET["porcentaje"])){

        //Remplazamos el ultimo caracter del numero por un cero
        $porcentaje = substr_replace($_GET["porcentaje"], 0, -1);
        //$sale = intval(substr_replace($_GET["sale"], 0, -1));

        //Formateamos el numero de venta
        $sale = intval($_GET["sale"]);

        //Validamos si el porcentaje es mayor a 100 realizamos la validacion del porcentaje
        if(strlen($porcentaje) > 2  && $porcentaje != "100"){
            //Removemos el ultimo numero del porcentaje
            $porcentaje = intval(substr_replace($_GET["porcentaje"], "", -1));

            //Agregamos un cero en medio de los dos numero para porder calcular el porcentaje
            $porcentaje = substr_replace($porcentaje, 0, 1, 0);
        }

        //Calculamos el porcentaje del cliente
        $returnPorcentaje = ($sale * intval($porcentaje)) / 100;

        //Retornamos la respuesta con la informacion
        echo json_encode(array('info' => "El total de la comision es de " . $returnPorcentaje));
    }else{

        //Retornamos una alerta cuando los datos no son los requeridos
        echo json_encode(array('info' => "Error con los datos"));
    }
}else{

    //Retornamos una alerta cuando no es el metodo requerido
    echo json_encode(array('info' => "Error con el tipo de peticion"));
}

?>