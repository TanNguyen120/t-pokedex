import React from 'react'
import { Link } from 'react-router-dom'

const PokeDexBtn = ({ pokeDexName }) => {
    return (
        <Link to={`${pokeDexName}`} className=' rounded-lg bg-slate-100 hover:bg-slate-300 hover:scale-120 hover:cursor-pointer p-3 m-3 text-center capitalize text-slate-700 hover:text-white'>
            {pokeDexName}
        </Link>

    )
}

export default PokeDexBtn