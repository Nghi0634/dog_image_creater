function create_image(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data)
        const image_url = data.message
    
        const img = document.getElementById('dog_image');
        img.setAttribute('src', image_url);
        console.log(image_url)
    })
    .catch(error=>{
        console.log(error);
    });
}