const value = 'dog'

const requestInfo = async () => {
    try {
        const response = await fetch('https://api.pexels.com/v1/search?query='+value,{
            headers:{
                'Authorization':'gJ0ehmD47Yj0OwAcvzRFtqpz5iceYxvp8A32CaopTHRyHTIzx5TVvXxF'
            }
    });
    const dog = await response.json()
    console.log(dog);
    } catch (error) {
        console.log(error);
    }
}
requestInfo();

