function sumar(x, y) {  
    return x + y;  
}  
let sum = sumar;  

let sumarcurrying = (x) =>{
    return (y) =>{
        return x+y;
    }
}