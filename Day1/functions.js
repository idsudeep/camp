/**
 * Functions and Methods
 */


// function sum(a, b) {
//     return a + b;
// }


sum_with_return = (a, b) => {
    return a + b;
}


sum_without_return = (a, b) => {
    console.log(a + b);
}

total = sum_with_return(10, 20);

console.log(total);
sum_without_return(40, 50);


/**
 * Types of Functions
 *  - f(n) with return type
 *  - f(n) void or no return type
 */



//   function assignment 
  
//   user-deifined function  with argument and return type with boolean.

     isNumber=(p,q,r,s) =>
     { if(typeof(p)!='string' && typeof(q)!='string' && typeof(r)!='string' && typeof(s)!='string'){  return true;}
       else{return false;}
     }

//  Declear a function 
operation_with_para = (a,b,c,d)=>
   {
    var a,b,c,d;
//  passing a value to isNumber function. 
    var validate_input = isNumber(a,b,c,d);

    console.log('isNumberfunction Return value :'+validate_input);
    
     if(validate_input !=true)
     {console.log('error invalid input  re-enter ..');}
    else {
        const val = (((a+c)*d)+b);
        return val;
         }
    }
const w =4;
const x =3;
const y =3;
const z = 2;

//  calling a function operation_with_para for operation
var return_value = operation_with_para(w,x,y,z);
console.log(`return Value from function is :` +return_value);

