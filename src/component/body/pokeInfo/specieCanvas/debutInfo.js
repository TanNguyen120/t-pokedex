import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../loadingSpiner';

const DebutInfo = ({ generation }) => {
    const pokeForm = useSelector(state => state.singlePokemon.form)
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 flex flex-col">
            <h3>
                Debut <FaBirthdayCake className='inline' />
            </h3>
            <Link to={`/t-pokedex/generations/${generation}`} className='bg-white rounded-lg text-center text-black m-2 font-medium'>
                {generation}
            </Link>
            <Link to={`/t-pokedex/version-group/${pokeForm ? pokeForm.version_group.name : ""}`} className='bg-white rounded-lg text-center text-black m-2 font-medium'>
                {pokeForm ? <span> {`pokémon ${pokeForm.version_group.name}  `} </span> : <LoadingSpinner />}
            </Link>
        </div>
    )
}

export default DebutInfo