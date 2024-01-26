/*  ESERCIZIO +1  */

function removeTwitter(){
    const ex1 = document.querySelector('aside div:nth-child(3) ol li:nth-child(2)')

    ex1.innerHTML=' '
}removeTwitter()

/*  ESERCIZIO +2  */

function removeContinuaALeggere(){
    const father = document.querySelector('body>div>div>div p:last-of-type')
    const jumbotron = document.querySelector('body>div>div>div p>a')
    const row = document.querySelectorAll('body>div>div:last-of-type div > div a')
    
    row.forEach((element)=>{
        element.addEventListener('click',()=>{
            element.parentNode.innerHTML=' '
        })
    })

    jumbotron.addEventListener('click',()=>{
        father.innerHTML=' '
    })
}removeContinuaALeggere()

/*  ESERCIZIO +3  */

function hoverName(){
    const names = document.querySelectorAll('main > div > div > div h2 + p a')
   
    names.forEach((element)=>{
        element.addEventListener('mouseover',()=>{
            alert(element.textContent)
        })
    })
}hoverName()