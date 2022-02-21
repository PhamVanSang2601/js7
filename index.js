let array = [];
const resultEl = document.getElementById("result");
const submitEl = document.getElementById("submit").onclick = function (){
    const numberEl = +document.getElementById("number").value;
    if(numberEl % 1 === 0){
        array.push(numberEl);
    } else if (numberEl % 1 !== 0){
        alert("NHẬP LẠI SỐ NGUYÊN");
    }
    console.log(array);
}
const submit2 = document.getElementById("submit2").onclick = function(){
    const chooseEl = +document.getElementById("choose").value;
    if(chooseEl === 1){
        let sum = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0){
                sum += array[index];
            }
        }
        console.log(sum);
        resultEl.innerHTML +=`<p class="m-0">TỔNG SỐ DƯƠNG LÀ: ${sum}</p>`
    } else if(chooseEl === 2){
        let sum = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0){
                sum += 1;
            }
        }
        console.log(sum);
        resultEl.innerHTML +=`<p class="m-0">CÓ: ${sum} SỐ DƯƠNG TRONG MẢNG</p>`
        
    } else if (chooseEl === 3) {
        const minInArray = Math.min.apply(Math, array);
        console.log(minInArray);
        resultEl.innerHTML +=`<p class="m-0">SỐ NHỎ NHẤT TRONG MẢNG LÀ: ${minInArray}</p>`
    } else if (chooseEl === 4){
        let numbarray = [];
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0){
                numbarray.push(array[index]);
            }
        }
        const minInArray = Math.min.apply(Math, numbarray);
        console.log(numbarray)
        console.log(minInArray)
        resultEl.innerHTML +=`<p>SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG LÀ: ${minInArray}</p>`
    } else if (chooseEl === 5){
        let numbarray = [];
        for(let index = 0; index <= array.length; index++){
            if(array[index] % 2 === 0){
                numbarray.push(array[index]);
            }
        }
        console.log( "Phần tử cuối cùng:  ", numbarray[numbarray.length-1] )
        if(numbarray.length === 0){
            resultEl.innerHTML += `<p>-1</p>`
        } else {
            resultEl.innerHTML += `<p>SỐ CHẴN CUỐI CÙNG TRONG MẢNG LÀ: ${numbarray[numbarray.length-1]}</p>`
        }
    } else if (chooseEl === 6) {
        const addPositionEl = document.getElementById("addPosition");
        addPositionEl.style.display = "block";
    }

    resultEl.style.display = "block";
}
const submit3 = document.getElementById("submit3").onclick = function(){
    const position1El = +document.getElementById("position1").value;
    const position2El = +document.getElementById("position2").value;
    console.log("vị trí 1:", position1El,"vị trí 2:", position2El);
    const tmp = array[position1El - 1];
    array[position1El - 1] = array[position2El - 1];
    array[position2El - 1] = tmp;
    console.log(array);
    resultEl.innerHTML += `<p>MÃNG SAU KHI ĐỔI VỊ TRÍ 2 PHẦN TỬ LÀ: ${array}</p>`
    resultEl.style.display = "block";
}