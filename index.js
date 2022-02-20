let array = [];

const submitEl = document.getElementById("submit").onclick = function (){
    const numberEl = +document.getElementById("number").value;
    array.push(numberEl);
    console.log(array);
}
const submit2El = document.getElementById("submit2").onclick = function(){
    
    const chooseEl = +document.getElementById("choose").value;
    if(chooseEl === 1){
        let sum = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0 && array[index] % 1 === 0){
                sum += array[index];
            }
        }
        console.log(sum);
    }
    
}