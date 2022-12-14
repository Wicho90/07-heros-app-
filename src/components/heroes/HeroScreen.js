import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
    const { heroeId } = useParams();
    
    const navigate = useNavigate();
    
    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ]);
        
    if ( !hero) {
        return <Navigate to="/" replace />
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;


    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-4 ">

            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    className="img-thumbnail animate__animated animate__fadeInLeft"                    
                    alt={ superhero }
                />
            </div>


            <div className="col-8">
                
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
                
        </div>
    )
}