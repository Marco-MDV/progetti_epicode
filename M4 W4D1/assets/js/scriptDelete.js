

const table = (elements)=>{
    const table = document.createElement('table');
    table.classList.remove('opacity-0')
    table.classList.add('opacity-1')
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    console.log(elements);
    elements.forEach(element =>{
        const tr = document.createElement('tr')
        tr.classList.add('rowElement')
        tbody.append(tr)
        /* name */
        const  tdName = document.createElement('td')
        tdName.textContent = element.name
        tdName.classList.add('tdName')

        /* description */
        const  tdDescription = document.createElement('td')
        tdDescription.classList.add('truncate','hidden','lg:table-cell','p-2','tdDescription') 
        tdDescription.textContent = element.description

        /* brand */
        const  tdBrand = document.createElement('td')
        tdBrand.classList.add('tdBrand','hidden','md:table-cell')
        tdBrand.textContent = element.brand

        /* url */
        const  tdImageUrl = document.createElement('td')
        tdImageUrl.classList.add('truncate','hidden','lg:table-cell','p-2','tdImageUrl')
        tdImageUrl.textContent = element.imageUrl

        /* price */
        const  tdPrice = document.createElement('td')
        tdPrice.classList.add('hidden','md:table-cell','p-2','tdPrice')
        tdPrice.textContent = element.price

        /* id */
        const tdId = document.createElement('td')
        tdId.classList.add('truncate','tdId','hidden','md:table-cell','p-2')
        tdId.textContent = element._id

        /* delete */
        const tdButon1 = document.createElement('td')
        tdButon1.classList.add('p-2')
        const tdButtonDelet = document.createElement('button')
        tdButtonDelet.classList.add('rounded-full', 'px-3', 'py-1', 'hover:bg-slate-500','tdButtonDelet','table-cell')
            const tdButtonDeletIconst = document.createElement('ion-icon')
            tdButtonDeletIconst.setAttribute('name', 'trash-outline')
            tdButtonDelet.append(tdButtonDeletIconst)
            tdButon1.append(tdButtonDelet)
        /* modify */
        const tdButon2 = document.createElement('td')
        tdButon2.classList.add('p-2')
        const tdButtonModify = document.createElement('button')
        tdButtonModify.classList.add('rounded-full', 'px-3', 'py-1', 'hover:bg-slate-500','tdButtonModify','table-cell')
            const tdButtonModifyIcon = document.createElement('ion-icon')
            tdButtonModifyIcon.setAttribute('name', 'build-outline')
            tdButtonModify.append(tdButtonModifyIcon)
            tdButon2.append(tdButtonModify)
        tr.append(tdName, tdDescription, tdBrand, tdImageUrl, tdPrice, tdId , tdButon1, tdButon2)
    });
    deleteObject()
    modify()
}

requestInfo().then(res => {
    table(res) 
})


const deleteObject = () =>{
    const tr = document.querySelectorAll('tbody tr')
    tr.forEach(element => {
        const deleteButton = element.querySelector('.tdButtonDelet')
        deleteButton.addEventListener('click',() => {
            element.remove(element)
            deleteRquest(element.querySelector('.tdId').textContent)
            requestInfo()
        })
    })
}

const modifyTable  = document.querySelector('.modifyTable')
const modal = document.querySelector('.listModal')
const modify = () =>{
    const rows = document.querySelectorAll('.rowElement')
    rows.forEach(row =>{
        const ButtonModify = row.querySelector('.tdButtonModify')
        ButtonModify.addEventListener('click',() => {

            /* mettiamo i valiri automaticamente */
            const name = modal.querySelector('#name').value= row.querySelector('.tdName').textContent
            const description = modal.querySelector('#description').value= row.querySelector('.tdDescription').textContent
            const brand = modal.querySelector('#brand').value= row.querySelector('.tdBrand').textContent
            const imageUrl = modal.querySelector('#imageUrl').value= row.querySelector('.tdImageUrl').textContent
            const price = modal.querySelector('#price').value= row.querySelector('.tdPrice').textContent
            const id = modal.querySelector('#id').value= row.querySelector('.tdId').textContent

            

            /* il problema è che non prende i valori aggiornati */
            /* modal.querySelector('input').addEventListener('change',() => {
                let nameP = modal.querySelector('#name').value
                let descriptionP = modal.querySelector('#description').value
                let brandP = modal.querySelector('#brand').value
                let imageUrlP = modal.querySelector('#imageUrl').value
                let priceP = modal.querySelector('#price').value
                
                console.log(object);
            }) */

            /* let object = {
                name: name,
                description: description,
                brand: brand,
                imageUrl: imageUrl,
                price: price,
            } */
            
            modifyTable.classList.add('animationModal')
            /* sendObjectModify(id, object) */
            closedModal()
            

        });
    })
}

const sendObjectModify = (id ,object) =>{ 
    const sendObjectModify = document.querySelector('#sendObjectModify')
    sendObjectModify.addEventListener('click',() => {
        modifyTable.classList.remove('animationModal')
        modifyTable.classList.add('opacity-0','z-[-10]')
        /* putRquest(id, object) */
        /* requestInfo().then((response) => console.log(response)) */

        /* const name = modifyTable.querySelector('#name').value
        const description = modifyTable.querySelector('#description').value
        const brand = modifyTable.querySelector('#brand').value
        const imageUrl = modifyTable.querySelector('#imageUrl').value
        const price = modifyTable.querySelector('#price').value */
        
        /* let objectx = {
            name: name,
            description: description,
            brand: brand,
            imageUrl: imageUrl,
            price: price,
        } */

        /* console.log(objectx); */
        console.log(putRquest(id, object));
    })
}

const closedModal = () =>{
    const closedModal = document.querySelector('#closedModal')
    closedModal.addEventListener('click',() => {
        const modifyTable  = document.querySelector('.modifyTable')
        modifyTable.classList.remove('animationModal')
        modifyTable.classList.add('opacity-0','z-[-10]')
    })
}