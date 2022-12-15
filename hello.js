const strHello = "Hello";
console.log(strHello);

//On export un module avec module.exports
module.exports = strHello;

const a = 1;
const b = 2;

function additionner (a,b){
    return a+b
    
};

module.exports = additionner;