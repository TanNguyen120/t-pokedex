import React, { useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import DamageClassMenu from './menuChoose'
import DamageClassMoveList from './damageClassMoveList'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const moveDamageList = (await (axios.get(`https://pokeapi.co/api/v2/move-category`))).data

    return moveDamageList.results
}


const DamageClass = () => {

    const moveDamageList = useLoaderData();

    const [currentDamageClass, setCurrentDamageClass] = useState(moveDamageList[0].name);
    const setDamageClassChoose = (palparkName) => {
        setCurrentDamageClass(palparkName);
    }
    return (
        <div className=' bg-whiteStripe2 bg-scroll   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-50 rounded-lg p-4'>
                    <div className=' m-2 p-4 rounded-lg bg-white border border-slate-500 text-2xl'>
                        Damage classes moves can have, e.g. physical, special, or non-damaging.
                    </div>
                    <DamageClassMenu currentDamageClass={currentDamageClass} setCurrentDamageClass={setDamageClassChoose} damageClassList={moveDamageList} />
                    <DamageClassMoveList damageClassName={currentDamageClass} />
                </div>
            </div>
        </div>
    )
}

export { loader };



export default DamageClass