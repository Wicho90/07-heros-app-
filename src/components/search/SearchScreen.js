import React from 'react'
import querySting from 'query-string'
import { useNavigate, useLocation } from "react-router-dom";
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = querySting.parse( location.search );


  const heroesFilter = heroes;
 
  const [formValues, handleInputChange] = useForm({searchText: q});

  const { searchText } = formValues;

  const handleSearch = ( e ) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
    

  }

  return (
    <div>
        <h1> Search Screen </h1>
        <hr />

        <div className="row">
            
            <div className="col-5">
                <h4> Search Form </h4>
            </div>

            <form onSubmit={ handleSearch }>
              <input
                type="text"
                placeholder="Find your hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
              />

              <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
              >
                Search...
              </button>
            </form>

            <div className="col-7">
              <h4> Results </h4>
              <hr />

              {
                heroesFilter.map( hero => (
                  <HeroCard 
                    key={ hero.id }
                    { ...hero }
                  />
                ))
              }
            </div>

        </div>
    </div>
  )
}
