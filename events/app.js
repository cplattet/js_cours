//const li = document.querySelectorAll('li');
//console.log(li[2])
//li.forEach(v => console.log(v))
//console.log(Array.from(li))

const ul = document.querySelector('ul li:first-child');
console.log(
    //ul.nodeName,
    //ul.innerHTML,
    //ul.innerText,
    //ul.textContent
    //ul.getAttribute('class')
)



/*
setInterval(()=>{
    ul.classList.toggle('red')
},1000)
*/
//ul.setAttribute('hidden', 'hidden')
//ul.innerHTML = 'Hello'
//ul.removeAttribute('hidden')

// styler un li
const li = document.querySelector('ul li:first-child');
li.style.color = 'blue';
li.style.fontWeight = 'bold'

const newLi = document.createElement('li')
newLi.innerHTML = 'Bonjour'
document.querySelector('ul').appendChild(newLi)