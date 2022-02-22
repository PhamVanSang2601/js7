// tạo mảng
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
// chọn chức năng
const submit2 = document.getElementById("submit2").onclick = function(){
    const chooseEl = +document.getElementById("choose").value;
    // chức năng 1
    if(chooseEl === 1){
        let sum = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0){
                sum += array[index];
            }
        }
        console.log(sum);
        resultEl.innerHTML +=`<p class="m-0">TỔNG SỐ DƯƠNG LÀ: ${sum}</p>`
    }
    // chức năng 2 
    else if(chooseEl === 2){
        let sum = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] > 0){
                sum += 1;
            }
        }
        console.log(sum);
        resultEl.innerHTML +=`<p class="m-0">CÓ: ${sum} SỐ DƯƠNG TRONG MẢNG</p>`
        
    }
    // chức năng 3
    else if (chooseEl === 3) {
        const minInArray = Math.min.apply(Math, array);
        console.log(minInArray);
        resultEl.innerHTML +=`<p class="m-0">SỐ NHỎ NHẤT TRONG MẢNG LÀ: ${minInArray}</p>`
    }
    // chức năng 4
    else if (chooseEl === 4){
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
    }
    // chức năng 5
    else if (chooseEl === 5){
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
    }
    // chức năng 6
    else if (chooseEl === 6) {
        const addPositionEl = document.getElementById("addPosition");
        addPositionEl.style.display = "block";
    }
    // chức năng 7
    else if (chooseEl === 7) {
        array.sort();
        console.log(array);
        resultEl.innerHTML += `<p>SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN: ${array}</p>`
    }
    // chức năng 8
    else if (chooseEl === 8){
        let numbarray = [];
        function isprime(n){
            //flag = 0 => không phải số nguyên tố
            //flag = 1 => số nguyên tố
            
            let flag = 1;
        
            if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
            
            /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
            let i = 2;
            while(i <n){
                if( n%i==0 ) {
                    flag = 0;
                    break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
                }
                i++;
            }
        
            return flag;
        }
        /*Tìm và liệt kê các số nguyên tố trong mảng*/
        for (let i = 0; i < array.length; i++){
            if (isprime(array[i]) == 1) {
                numbarray.push(array[i]);
            }
        }        
        console.log(numbarray);
        if(numbarray.length === 0){
            resultEl.innerHTML += `<p>-1</p>`
        } else{
            resultEl.innerHTML += `<p>SỐ NGUYÊN ĐẦU TIÊN TRONG MẢNG LÀ: ${numbarray[0]}</p>`
        }
    }
    // chức năng 9
    else if ( chooseEl === 9){
        const addArrayEl = document.getElementById("addArray");
        addArrayEl.style.display = "block";
    }
    // chức năng 10
    else if (chooseEl === 10){
        let poNumber = [];
        let neNumber = [];
        for(let index = 0; index < array.length; index++){
            if(array[index] > 0){
                poNumber.push(array[index]);
            } else if(array[index] < 0){
                neNumber.push(array[index]);
            }
        }
        console.log("mảng số dương: ", poNumber, "mảng số âm: ", neNumber)
        if(poNumber.length === neNumber.length){
            resultEl.innerHTML += `<p>HAI MẢNG BẰNG NHAU</p>`
        } else if(poNumber.length > neNumber.length){
            let sub = poNumber.length - neNumber.length;
            resultEl.innerHTML += `<p>MẢNG DƯƠNG NHIỀU HƠN ${sub} SỐ</p>`
        } else if(poNumber.length < neNumber.length){
            let sub = neNumber.length - poNumber.length;
            resultEl.innerHTML += `<p>MẢNG ÂM NHIỀU HƠN ${sub} SỐ</p>`
        }
    }
    resultEl.style.display = "block";
}
// chức năng 6
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
// chức năng 9
let realnumberArray = [];
const addRealnumber = document.getElementById("addRealnumber").onclick = function() {
    const realnumberEl = +document.getElementById("realnumber").value ;
    if(Math.pow(realnumberEl, 2) > 0){
        realnumberArray.push(realnumberEl)
    } else if (Math.pow(realnumberEl, 2) < 0) {
        alert("nhập lại số thực");
    }
    console.log("mảng số thực mới:", realnumberArray);
}
const submit4 = document.getElementById("submit4").onclick = function (){
    let sum = 0;
    
    for(let index = 0; index < realnumberArray.length; index++){
        if(realnumberArray[index] % 1 === 0){
            sum += 1;
        } else if (realnumberArray.length = 0){
            sum = 0;
        }
    }
    if( sum > 0){
        resultEl.innerHTML += `<p>TRONG MẢNG CÓ: ${sum} SỐ NGUYÊN</p>`
    } else if (sum === 0){
        resultEl.innerHTML += `<p>-1</p>`
    }
}