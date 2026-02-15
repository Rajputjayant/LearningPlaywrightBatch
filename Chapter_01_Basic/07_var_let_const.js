// var, let, const

//var - Function Scoped

var a=10;// Global Scope


console.log(a);

// Defination of function
function test(){
    console.log("Hello Testing Academy");
    var a=20;// Local Scope
    console.log(a);
    if(true){
        var a=30;// Local Scope
        console.log(a);
    }
    console.log("Value of a outside if block: " + a);
}


// Calling of the function
test();


// var also redeclaration is possible
//var a=50;
//var a=60;// No error, redeclaration is possible with var
//console.log(a);



// let - Block Scoped
let b=100;// Global Scope
console.log(b);   

// Defination of function
function printHello(){
    console.log("Hello Testing Academy");
    let b=200;
    console.log(b);
    if(true){
        let b=300;
        console.log(b);
    }

    console.log("Value of b outside if block: " + b);
}


// Calling of the function
printHello();


// let does not allow redeclaration in the same scope
//let b=400;// Error: Identifier 'b' has already been declared
//let b=10;
//let b=10;// Error: Identifier 'b' has already been declared

let c=10;
c=20;
console.log(c);



const pi=3.14;//CONSTANT variable, value cannot be changed
console.log(pi);
// pi=3.14159;// Error: Assignment to constant variable.
