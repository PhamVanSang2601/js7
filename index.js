let array = [];
const submitEl = document.getElementById("submit").onclick = function (){
    const numberEl = +document.getElementById("number").value;
    array.push(numberEl);
    console.log(array);
}
