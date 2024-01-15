function chatBot() {
    const buttoBot = document.querySelector('.buttonBotClass')
    const container = document.querySelector('.container')
    const containerButton = document.createElement('div')
    const backHome = document.createElement('button')
    const reset = document.createElement('button')
    const chatContainer = document.createElement('div')
    const inputUser = document.createElement('input')


    
    /* Open Chat */

    buttoBot.addEventListener('click', () => {
        buttoBot.classList.add('hide');
        container.classList.remove('hide')
        container.classList.add('backChat')
        backHome.textContent = 'back home'
        reset.textContent = 'clear Chat'
        inputUser.placeholder = 'press "enter" for help'
        chatContainer.classList.add('bgChat')
        containerButton.append(backHome, reset)
        container.append(containerButton, chatContainer, inputUser)

    })

    /* Back home */
    backHome.addEventListener('click', () => {
        container.classList.add('hide')
        buttoBot.classList.remove('hide')
    })


    inputUser.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            const input = inputUser.value;
            inputUser.value = "";
            const lowerText = input.toLowerCase().replace(/[!\-\,\?\*\s+]/, '')
            console.log(lowerText);
            for (const elemento1 of greetings){
                for (const elemento2 of questionSuppliers){
                    if (elemento1.includes(lowerText)){
                        //me
                        const containerTextUser = document.createElement('div')
                        containerTextUser.classList.add('messageUser')
                        chatContainer.append(containerTextUser)
                        containerTextUser.innerHTML = '<div>' + '<ion-icon name="person-outline"></ion-icon>' + '</div>'+'<p>'+ input +'</p>';
                        //respons bot
                        const containerBot = document.createElement('div')
                        containerBot.classList.add('messageBot')
                        chatContainer.appendChild(containerBot)
                        const saluti = greetings[Math.floor(Math.random()*greetings.length)]
                        containerBot.innerHTML = '<div>' + '<ion-icon name="logo-android"></ion-icon>' + '</div>'+'<p>'+ saluti +" i'm Mustafa</p>";
                        break
                    }else if (elemento2.includes(lowerText)) {
                        //me
                        const containerTextUser = document.createElement('div')
                        containerTextUser.classList.add('messageUser')
                        chatContainer.append(containerTextUser)
                        containerTextUser.innerHTML = '<div>' + '<ion-icon name="person-outline"></ion-icon>' + '</div>'+'<p>'+ input +'</p>';
                        //respons bot
                        const containerBot = document.createElement('div')
                        containerBot.classList.add('messageBot')
                        chatContainer.appendChild(containerBot)
                        containerBot.innerHTML = '<div>' + '<ion-icon name="logo-android"></ion-icon>' + '</div>'+'<p>'+ suppliers.toString() +"</p>";
                        break
                    }else{
                        //me
                        const containerTextUser = document.createElement('div')
                        containerTextUser.classList.add('messageUser')
                        chatContainer.append(containerTextUser)
                        containerTextUser.innerHTML = '<div>' + '<ion-icon name="person-outline"></ion-icon>' + '</div>'+'<p>'+ input +'</p>';
                        //respons bot
                        const containerBot = document.createElement('div')
                        containerBot.classList.add('messageBot')
                        chatContainer.appendChild(containerBot)
                        const tryAgain = randomRespons[Math.floor(Math.random()*randomRespons.length)]
                        containerBot.innerHTML = '<div>' + '<ion-icon name="logo-android"></ion-icon>' + '</div>'+'<p>'+ tryAgain +"</p>";
                        break
                    }
                }
                break
            }
        }
    })

   /* clear Chat */
    reset.addEventListener('click',()=>{
    const user=document.querySelector('.messageUser')
    const bot=document.querySelector('.messageBot');
    user.remove()
    bot.remove()  
    })


} chatBot()