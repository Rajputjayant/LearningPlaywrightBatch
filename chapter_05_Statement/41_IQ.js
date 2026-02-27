if ([]) {
    console.log("True!")
}
// case 1
let response;
if (response) {

}
// case 2
if (response !== null) {

}



if (true) {

}
else if (false) {

}
// else{

// }


// practice

let arr=[];
if(arr.length===0){
    console.log("Array is empty");
}
if([]){
    console.log("True");
}

// All the following values are falsy in JavaScript:

//false

//0

//"" (empty string)

//null

//undefined

//NaN



let x = "5";

if (x == 5) {
   console.log("True");// true 
}
if (x === 5) {
   console.log("True");// false and not executed because === checks for both value and type, and here x is a string while 5 is a number.
}