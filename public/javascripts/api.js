
const swapifilms = 'https://swapi.dev/api/films'


 fetch(`${swapifilms}`)
.then(res =>{
    if(res.ok){
        console.log(res);
        res.json().then(response =>{
           
        const moviesArray = response.results;
        console.log(moviesArray);
           
        let moviesTitle = [];

        for (let index = 0; index < moviesArray.length; index++) {
                moviesTitle.push(moviesArray[index].title)
                
            }
        const moviesTitleArray =   Array.from(moviesTitle)
        
        console.log(moviesTitleArray);

        moviesTitleArray.forEach((movie)=>{
            List.innerHTML += `<li>${movie}</li>`
        })    




        
        })
    }
    else {
        console.error('oops, fails'+res.status);
        
    }  


})
.catch(error =>{
    console.error('oops, fail' + error);
    });


   