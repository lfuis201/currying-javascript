//Implemente una funci ́on delayInvoc que en cada invocacion incremente la variable total con el
//valor enviado como parametro.
let total = 0;

function delayInvoc(...args) {
    let result= args.reduce((r,v)=> r+v);

    const sum = (...innerargs)=>{
        if (innerargs.length === 0) return result;
        return delayInvoc(...args, ...innerargs)
    }
    return sum;
};

let total1 = delayInvoc(4)(5)();
console.log ( total1); //9
total1 = delayInvoc(4)(5)(8)();
console.log ( total1 ); // 26