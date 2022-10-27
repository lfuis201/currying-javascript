let cilindrevolume = (r,h) => r*r*h*Math.PI;

let cilindervolumecurry = (r) =>{
    return (h) =>{
        return r*r*h*Math.PI
    }
}
console.log(cilindrevolume(8,9))

console.log(cilindervolumecurry(8)(9))