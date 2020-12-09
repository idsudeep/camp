

const first = () => {
    console.log("First call");
}

const second = () => {

    setTimeout(() => {
        console.log("Second call");
    }, 2000);
}


const third =()=>{console.log('third ');}
setTimeout(third, 3000);
/*
const third = () => {

    setTimeout(() => {
        console.log('third call');
    }, 3000);
                    }
 */                   

first();
second();
// thrid();

