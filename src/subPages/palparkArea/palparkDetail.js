import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PalparkDetail = ({ palparkName }) => {
    const [palparkDetails, setPalparkDetails] = useState(null);
    useEffect(() => {
        const getPalparkData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/pal-park-area/${palparkName}`))).data
            setPalparkDetails(resData)
        }
        getPalparkData();
    }, [palparkName])
    return (
        <div className=' rounded-lg bg-slate-100 p-4'>
            {JSON.stringify(palparkDetails)}
        </div>
    )
}

export default PalparkDetail