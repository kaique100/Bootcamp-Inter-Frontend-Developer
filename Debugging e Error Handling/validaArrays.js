function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr  !== 'object') throw new TypeError("O array precisa ser do tipo object!");

        if(typeof num !== 'number') throw new TypeError("O segundo parâmetro do array precisa ser do tipo number!");

        if(arr.length !== num) throw new RangeError("tamanho inválido!");

        return arr;

    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Esse error é um ReferenceError!");
            console.log(error.message);
           
        } else if(error instanceof TypeError){
            console.log("Esse error é um TypeError!");
            console.log(error.message);
           
        } else if(error instanceof RangeError){
            console.log("Esse error é um RangeError!");
            console.log(error.message);
           
        }else{
            console.log("Ocorreu um tipo de error não esperado: " + error);
        }

    }

}

console.log(validaArray([1,2,3,4,5], 5));