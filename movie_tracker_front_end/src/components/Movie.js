import React from "react"

function Movie({movie}) {
    const {titie, id} = movie;

    return (
        <div>
            Title : {titie}
            

        </div>
    )
}

export default Movie