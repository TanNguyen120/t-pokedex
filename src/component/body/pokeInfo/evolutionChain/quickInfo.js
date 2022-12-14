import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import typeToColor from '../../../../tool/typeColor';
import toTitleCase from '../../../../tool/upperCaseString';

const QuickInfo = ({ pokemon }) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-300 text-center p-1 mx-8 mt-3 rounded-lg">
            <h3 className="font-semibold text-base hover:cursor-pointer" onClick={e => {
                dispatch(findPokeByID(pokemon.name))
            }}>#{pokemon.orderInNationalDex} {toTitleCase(pokemon.name)}</h3>
            <div className='bg-slate-300 rounded-lg items-center m-1'>
                <div className='bg-white rounded-lg justify-center flex flex-col md:flex-row py-2 items-center'>
                    {pokemon.type.map((type, index) => (
                        <div className={`${typeToColor(type.type.name)} w-20 h-6 rounded-md text-white text-center text-sm font-semibold border border-indigo-600 m-1 px-3 font-mono hover:cursor-pointer`} key={index}>
                            {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default QuickInfo