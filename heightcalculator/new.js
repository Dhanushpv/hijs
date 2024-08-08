let Submit = document.getElementById('submit').onclick = function(){


    let Num = document.getElementById('num').value

    let sele1 = document.getElementById('select').value

    let sele2 = document.getElementById('select2').value
   
    if (sele1 === "feet" && sele2 === "meter"){
        Num= Num / 0.3048;
        console.log(Num)

    }
}
