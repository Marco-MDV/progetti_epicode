window.onload=()=>{
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id')

    requestInfo().then(res => createCard(res.filter((element)=>element._id === id)))
}

