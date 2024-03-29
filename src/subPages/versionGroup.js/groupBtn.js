import React from 'react'
import { Link } from 'react-router-dom'


const GroupBtn = ({ versionName }) => {
    return (
        <Link to={`/t-pokedex/version-group/${versionName}`} className='capitalize rounded-lg bg-slate-100 ring-2 ring-slate-400 m-2 p-2 hover:scale-125 hover:bg-slate-300 hover:cursor-pointer hover:text-blue-500'>
            {versionName}
        </Link>
    )
}

export default GroupBtn