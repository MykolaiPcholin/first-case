function firstFunction(array) {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++){
        newArray.push(array[i] * 2);
    }
    console.log(newArray)
    return newArray;
}
function secondFunction(array) {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++){
        newArray.push(array[i] * 3);
    }
    console.log(newArray)
    return newArray;
}

let map = (fn, array) => {
    let ourArray = array;
    document.write("INPUT ARRAY: " + array + "<br>", "OUTPUT ARRAY: " + fn(ourArray) + "<br><br>");
}
map(firstFunction,[1,2,3]);
map(secondFunction,[2,3,4]);


function checkAge(age) {
    return ((age > 18) ? document.write(true) : document.write(confirm('Родители разрешили?')));
}
let age = prompt("Сколько вам лет?");
checkAge(age);

