console.log('hello'); // строки берем в кавычки
console.log('world');
console.log(`hello world`);
console.log('3333');
console.log(334);
console.log("hello world");
console.log('hello' + "world"); // конкатенация
console.log('hello' + ' world'); // конкатенация
console.log('hello ' + 'world'); // конкатенация
console.log('hello' + ' ' + 'world'); // конкатенация
console.info("Hello");
// alert('hello'); 

document.getElementById('out').innerHTML = "Hello today is 10.08.22";
document.getElementById('out').innerHTML = "Hello today is 08.10.22";
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = "<b>2022</b>";

document.querySelector('.header').innerHTML = 7;
document.querySelector('#one').innerHTML = 777; // with #
document.getElementById('one').innerHTML = 888; // with out #


let b; // var a - устарело
let a = document.querySelector('#one'); //  внутрь a положил параграф
let c;
c = document.querySelector('.header');

a.innerHTML = 9999; // new! - mistake
c.innerHTML = 28011989;