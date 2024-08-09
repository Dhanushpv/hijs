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

    if (sele1 === "km" && sele2 === "mile"){
        Num= Num / 1.609

        console.log(Num)

    }else if(sele1 === "mile" && sele2 === "km"){
        Num= Num * 1.60934
        console.log(Num)

    }

    if (sele1 === "km" && sele2 === "meter"){
        Num= Num *1000

        console.log(Num)

    }else if(sele1 === "meter" && sele2 === "km"){
        Num= Num / 1000
        console.log(Num)

    }


    if (sele1 === "km" && sele2 === "cm"){
        Num= Num * 100000

        console.log(Num)

    }else if(sele1 === "cm" && sele2 === "km"){
        Num= Num / 100000
        console.log(Num)

    }

    if (sele1 === "km" && sele2 === "inch"){
        Num= Num * 39370.1

        console.log(Num)

    }else if(sele1 === "inch" && sele2 === "km"){
        Num= Num / 39370.1
        console.log(Num)

    }


    if (sele1 === "mile" && sele2 === "feet"){
        Num= Num * 5280

        console.log(Num)

    }else if(sele1 === "feet" && sele2 === "mile"){
        Num= Num / 5280
        console.log(Num)

    }

    if (sele1 === "mile" && sele2 === "meter"){
        Num= Num * 1609

        console.log(Num)

    }else if(sele1 === "meter" && sele2 === "mile"){
        Num= Num / 1609
        console.log(Num)

    }

    if (sele1 === "mile" && sele2 === "cm"){
        Num= Num * 160934.4

        console.log(Num)

    }else if(sele1 === "cm" && sele2 === "mile"){
        Num= Num / 160,934.4
        console.log(Num)

    }

    if (sele1 === "mile" && sele2 === "inch"){
        Num= Num * 63360

        console.log(Num)

    }else if(sele1 === "inch" && sele2 === "mile"){
        Num= Num / 63360
        console.log(Num)

    }
















    let Result= document.getElementById('result')
    Result.innerHTML= `Converted value: ${Num}`;

    // document.getElementById('result').innerText = `Converted value: ${Num}`;

}
