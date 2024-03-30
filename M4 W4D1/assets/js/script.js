/* removeMyMain() */
const pov = () =>{
    document.querySelector('.cardsContainer').classList.remove('myMain')
    document.querySelector('.cardsContainer').classList.add('h-full')
}




setTimeout(function(){requestInfo().then(res => {createCard(res)});},900)
/* setTimeout(function(){pov()},900) */


/* const header = document.querySelector('header')
header.style.height = '400px'
const rect = header.getBoundingClientRect()
console.log(rect.height);

const myMain = document.querySelector('.myMain')

myMain.style.minHeight = `calc(100vh - -400px)` */