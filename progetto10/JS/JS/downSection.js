function downSection(){
    const footer = document.createElement('footer')
    body.appendChild(footer)

    const buttonMode = document.createElement('button')
    buttonMode.classList.add('buttonChange')

    const Mail = document.createElement('p')

    const streat = document.createElement('p')
    streat.classList.add('way')


    buttonMode.innerText = 'Change Mode'
    Mail.innerHTML = info.mail
    streat.innerHTML = info.streat
    
    footer.append(buttonMode,Mail,streat)
}downSection()