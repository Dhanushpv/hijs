let date= new Date();

let day =date.getDate();
let month=date.getMonth() +1;
let year=date.getFullYear();
// console.log(`${day}.${month}.${year}`)

let currentdate= document.getElementById('CurrentDate');

currentdate.innerHTML=(`${day}-${month}-${year}`)
let Sub = document.getElementById('sub').onclick = function (){
    let inputtype= document.getElementById('type').value
    console.log(inputtype)


    let arr=inputtype.split ('-');
    console.log(arr);
    let age= "";
    age= year - arr[0];
    console.log(age);
    newAge.innerHTML= `Your age is : ${age}`;
}




