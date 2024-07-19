function calcPerimeter(length,width){
    let perimeter = 2*(length+width)
    console.log(`The perimeter is ${perimeter}`);
}

let length =prompt("enter the length");
let width =prompt("enter the width");

calcPerimeter(length,width);