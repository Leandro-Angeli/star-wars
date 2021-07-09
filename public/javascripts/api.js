
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
        List.innerHTML += `<li class='list-item'>${movie}</li>`
        
            
         
         })    
        
        
         let listLiHTMLCollection = document.getElementById('List').getElementsByClassName('list-item')
        
        let listLi = [].slice.call(listLiHTMLCollection);
         
    
     
        listLi.forEach((e,b,c)=>{
            
              addEventListener ('click',()=>{
                console.log(e,b);
              })  
        });

    

       



        
        })
    }
    else {
        console.error('oops, fails'+res.status);
        
    }  


})
.catch(error =>{
    console.error('oops, fail' + error);
    });


   