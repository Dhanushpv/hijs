let count = 0;
let count1 =document.getElementById('counters');
let count2 =document.getElementById('counters');

document.getElementById('decreaseBtn').onclick = function(){
    count -=1;
    count1.style.color='red';
    document.getElementById('counters').innerHTML=count;
}
document.getElementById('restBtn').onclick = function(){
    count =0;
    count2.style.color='black';
    document.getElementById('counters').innerHTML=count;
}
document.getElementById('increaseBtn').onclick = function(){
    count +=1;
    count2.style.color='black';
    document.getElementById('counters').innerHTML=count;
}