import React from "react";


const MovieCard = ({movie:{Poster, Title,Type,Year,imdbID}}) =>{
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !=='N/A'? Poster: "https://via.placeholder.com/400" } alt={Title}></img>
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard