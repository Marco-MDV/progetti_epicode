requestInfo().then(res => tablePresentObject(res))

const tablePresentObject = (elements)=>{
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    console.log(elements);
    elements.forEach(element =>{
        const tr = document.createElement('tr')
        tbody.append(tr)
        const  tdName = document.createElement('td')
        tdName.textContent = element.name
        tdName.classList.add('tdName')
        const  tdDescription = document.createElement('td')
        tdDescription.classList.add('truncate','hidden','lg:table-cell','tdDescription') 
        tdDescription.textContent = element.description
        const  tdBrand = document.createElement('td')
        tdBrand.textContent = element.brand
        tdBrand.classList.add('tdBrand','hidden','md:table-cell')
        const  tdImageUrl = document.createElement('td')
        tdImageUrl.classList.add('truncate','hidden','lg:table-cell','tdImageUrl')
        tdImageUrl.textContent = element.imageUrl
        const  tdPrice = document.createElement('td')
        tdPrice.classList.add('hidden','md:table-cell','tdPrice')
        tdPrice.textContent = element.price
        const tdId = document.createElement('td')
        tdId.classList.add('truncate','tdId','hidden','md:table-cell')
        tdId.textContent = element._id
        const tdButtonDelet = document.createElement('button','table-cell')
        tdButtonDelet.classList.add('rounded-full', 'px-3', 'py-1', 'hover:bg-slate-500','tdButtonDelet')
        tdButtonDelet.innerHTML=<ion-icon name="trash-outline"></ion-icon>
        tr.append(tdName, tdDescription, tdBrand, tdImageUrl, tdPrice, tdId , tdButtonDelet)
    });
}