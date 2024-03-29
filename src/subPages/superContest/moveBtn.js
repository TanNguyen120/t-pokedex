import React from 'react'
import { Link } from 'react-router-dom'

const MoveBtn = ({ moveData }) => {
    return (
        <>
            <Link to={`/t-pokedex/move/${moveData.name}`} className=' hover:cursor-pointer hover:bg-slate-300 hover:scale-125 rounded-lg' >
                <div className=' rounded-lg bg-white text-center hover:bg-slate-300 text-black capitalize p-2'>
                    {moveData.name}
                </div>
            </Link>
        </>
    )
}

export default MoveBtn