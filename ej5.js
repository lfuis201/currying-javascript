//Implemente una funci ́on delayInvoc que en cada invocaci ́on incremente la variable total con el
//valor enviado como parametro.

var total = 0;
function delayInvoc(...args) {
    const result = args.reduce((total,v) => total+v,0);
    const sum = (...innerargs)=>{
        if(innerargs.length===0) return result;
        return delayInvoc(...args, innerargs)
    }
    return sum;
};
let total1 = delayInvoc(4)(5)();
console.log ( total1 ); //9
let total2 = delayInvoc(4)(5)(8)();
console.log ( total2 ); // 26