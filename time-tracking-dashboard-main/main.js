// fetch se utiliza para buscar los datos en la api que deseamos consumir

let datos //Creare una variable que almacene los datos del objeto

fetch('data.json').then((response) =>{ //realiza una llamada de retorno
    if(!response.ok){//Si la respuesta es incorrecta
        return console.log('Oops! something went wrong.')//Envia este mensaje
    }else{
        return response.json() //Si la respuesta es incorrecta, envia este otro
    }
}).then((data) => { //El bloque then se le suele llamar promesa
    // Registra los datos en un objeto para posteriormente mostrarlos en consola
    datos = data 
})

