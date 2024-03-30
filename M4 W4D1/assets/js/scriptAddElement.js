const opneModal = () => {
    const send = document.querySelector('#sendObject')

    const name = document.querySelector('#name')
    const description = document.querySelector('#description')
    const brand = document.querySelector('#brand')
    const imageUrl = document.querySelector('#imageUrl')
    const price = document.querySelector('#price')

    send.addEventListener('click',() => {
        if (name.value || description.value || brand.value || imageUrl.value || price.value != '') {
            let newObject = {
                name: name.value,
                description: description.value,
                brand: brand.value,
                imageUrl: imageUrl.value,
                price: price.value
            }
            postRquest(newObject)
            name.value = ''
            description.value = ''
            brand.value = ''
            imageUrl.value = ''
            price.value = ''
        }else{
            alert('Devi inserire tutti i campi')
        }
    })

}
opneModal()