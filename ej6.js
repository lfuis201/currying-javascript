//Implemente una funcion curry que tome como argumento cualquier funcion f y retorne la versíon
//curried de f.
function abc(a, b, c) {
  return a + b + c;
}

function curry (f) {
    return suma = (...args) => {
        if (f.length !== args.length) return suma.bind(null, ...args);
    return f(...args);
    };
}


var curriedAbc = curry(abc);
console.log(curriedAbc(2)(3)(4)); // 9
console.log(curriedAbc(2, 3)(4)); // 9
console.log(curriedAbc(2)(3, 4)); // 9
console.log(curriedAbc(2, 3, 4)); // 9
