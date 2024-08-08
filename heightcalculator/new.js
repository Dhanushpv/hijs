let Submit = document.getElementById('submit').onclick = function(){


    let Num = document.getElementById('num').value


    let sele1 = document.getElementById('select1').value

    let sele2 = document.getElementById('select2').value
   
    if (sele1 === "feet" && sele2 === "meter"){
        Num= Num / 0.3048;
        console.log(Num)

    }else if(sele1 === "meter" && sele2 === "feet"){
        Num= Num * 3.2808;
        console.log(Num)

    }

    if (sele1 === "cm" && sele2 === "inch"){
        Num= Num / 0.39370;
        console.log(Num)

    }else if(sele1 === "inch" && sele2 === "cm"){
        Num= Num * 2.54;
        console.log(Num)

    }

    if (sele1 === "meter" && sele2 === "cm"){
        Num= Num * 100;
        console.log(Num)

    }else if(sele1 === "cm" && sele2 === "meter"){
        Num= Num / 100;
        console.log(Num)

    }


    if (sele1 === "feet" && sele2 === "cm"){
        Num= Num * 30.48 ;
        console.log(Num)

    }else if(sele1 === "cm" && sele2 === "feet"){
        Num= Num / 30.48;
        console.log(Num)

    }



    if (sele1 === "inch" && sele2 === "feet"){
        Num= Num / 12;
        console.log(Num)

    }else if(sele1 === "feet" && sele2 === "inch"){
        Num= Num * 12;
        console.log(Num)

    }

    if (sele1 === "inch" && sele2 === "meter"){
        Num= Num *0.0254
        console.log(Num)

    }else if(sele1 === "feet" && sele2 === "inch"){
        Num= Num * 12;
        console.log(Num)

    }






    let Result= document.getElementById('result')
    Result.innerHTML= `Converted value: ${Num}`;

    // document.getElementById('result').innerText = `Converted value: ${Num}`;

}
