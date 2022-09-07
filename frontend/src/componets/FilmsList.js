import React, { useEffect, useState } from "react"
import axios from "axios"
import Film from "./Film"
const FilmsList = ()=> {

    const [films,setFilms] = useState([])

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ad2c28e0345278f3c8b002efddadf28f&page=1").then((f)=>{
            setFilms(f.data.results);
            console.log(f.data.results)
           
        })

        
    })

    

    return (
        <div>
            {films && films.map( (film) => <Film film={film}></Film>)  }
        </div>
    )
}

export default FilmsList 