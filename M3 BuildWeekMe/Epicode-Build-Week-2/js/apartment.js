const setCityName = () => {
    let cityName = localStorage.getItem('cityName');
    const spanCityName =  document.querySelector('.cityName');
   
    if (cityName.innerHTML === 'null') {
        spanCityName.innerHTML = 'Genova';
    } else {
        spanCityName.innerHTML = '&#8901; ' + cityName;
        localStorage.clear();
    }
}

setCityName();