import React from 'react'
import { BsGenderMale, BsGenderFemale, BsGenderTrans } from 'react-icons/bs'
import { Link } from 'react-router-dom';



const GenderCanvas = ({ genderRatio }) => {
    const femalePercent = (genderRatio / 8).toFixed(2);
    const malePercent = 1 - femalePercent;
    return (

        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=' hover:underline hover:text-blue-500 font-semibold text-slate-500'>
                <Link to={`/t-pokedex/gender/`}>Gender Rate <BsGenderTrans className='inline' /></Link>

            </h3>
            {
                genderRatio > 0 ?
                    (<div className="bg-white rounded-lg p-2 m-2">
                        <span className="text-pink-400 font-mono text-base bg-slate-200 rounded-lg p-2 mr-1">{femalePercent * 100}% female <BsGenderFemale className='inline' />  </span>
                        <span className="text-blue-700 font-mono text-base bg-slate-200 rounded-lg p-2 ml-1"> {malePercent * 100}% male <BsGenderMale className='inline' /> </span>
                    </div>)
                    :
                    "This pokemon doesn`t have gender"
            }
        </div>

    )
}

export default GenderCanvas