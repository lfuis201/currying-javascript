//Cree una funcion joinWords que una varios parametros de tipo string.
function joinWords(...args){
    const result = args.join('');
    const joinW = (...innerargs)=>{
        if(innerargs.length===0) return result;
        return joinWords(...args, innerargs)
    }
    return joinW;
}


result = joinWords ('Hello ') () ;
console .log ( result ); // Hello
result = joinWords ('There ')('is ')('no ')('spoon .') () ;
console .log ( result ); // There is no spoon .
