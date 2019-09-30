import React from "react";

function tarjetaPelicula(props) {

    return (
        <div>
            <ul>
                <li key={props.key} >
                    {props.Titulo}
                </li>
            </ul>
        </div>
    )
}

export default tarjetaPelicula;