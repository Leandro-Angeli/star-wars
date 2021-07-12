// const { Body } = require("node-fetch");

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
         
    
     
        // listLi.forEach((e,b,c)=>{
            
        //       addEventListener ('click',()=>{
        //         console.log(e,b);
        //       })  
        // });

        for (let index = 0; index <listLi.length; index++) {
            listLi[index].classList.add('Movie-Title-Left');
            
        }

        const moviesTitleNodeList = document.querySelectorAll('.Movie-Title-Left');

    
        console.log(moviesTitleNodeList);
        const arrayMoviesLeft = Array.from(moviesTitleNodeList);
        console.log(arrayMoviesLeft);
        /* ANOTHER TRY */
      
     for (const item of arrayMoviesLeft) {
         console.log(item.innerHTML);
         item.addEventListener('click',()=>{
             for (const movie of moviesArray) {
                
                if (item.innerText === movie.title) {
                   const sliceString = (str) => {
                      const sliced = str.slice(0,10);
                       return sliced;
                       
                   }
                
                  const changeDateFormat = (param) =>{
                    const changedFormat = param.split('-').reverse().join('/');
                    return changedFormat;
                  }
                   const slicedStr = sliceString(movie.release_date);
                   
                   const strToChangeFormat = changeDateFormat(slicedStr);
                  

                    movieData.innerHTML= ` <h3> Title :${movie.title}</h3>
                                             <div> <p>Year of release: ${strToChangeFormat}</p>
                                                    <p>Director: ${movie.director}</p>
                                                    <p>Producer: ${movie.producer}</p>
                                                    <p>Order in  saga: ${movie.episode_id}</p>
                                                    <p>Opening crawl: ${movie.opening_crawl}</p>
                                             </div>
                                            `;
                 
                }
                 
             }
            
          
         })
         
     }
       

   


        
         

        /*ANOTHER TRY*/ 

        // arrayMoviesLeft.forEach((title)=>{

        //     const showTxt = ()=>{
        //         // movieData.innerHTML = title.innerText;
        //        console.log( typeof (arrayMoviesLeft));
               
        //       let movieTitleLeft = document.querySelectorAll('.Movie-Title-Left');
        //       movieTitleLeft = Array.from(movieTitleLeft);
        //        console.log( movieTitleLeft);

        //         const textTest = ()=>moviesArray.map(movie =>{
                  
        //             if ( arrayMoviesLeft[i]===moviesArray[i] ) {
        //                console.log(2);
                      
                        
        //             }
        //             console.log(movie.title);
                   
                   
                    
        //         })
        //         console.log(textTest());
        //     }
        //     title.addEventListener('click',showTxt)
        //     })

        console.log(moviesArray);

        // var arr =[1,2,3];
        // var arr2 = [11,22,33,1]

        

     






            /* END THEN*/
        })

        

        



   

   



       



        
        
    }
    else {
        console.error('oops, fails'+res.status);
        
    }  


})
.catch(error =>{
    console.error('oops, fail' + error);
    });


   