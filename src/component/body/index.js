import React, { useEffect, useState } from 'react'
import RadomMonSection from './randomMon'
import SearchBar from './searchBar'
import PokeInfo from './pokeInfo'
import MissingNoWarning from '../bonus banner/missingNoWarning'
import dynamicBG from '../../tool/bgChanger'
const Body = () => {
    const [bgURL, setBgURL] = useState("bg-pokemonBattle");
    useEffect(() => {
        setBgURL(dynamicBG());
    }, [])
    return (
        <div className={`${bgURL} bg-fixed bg-cover min-w-full min-h-screen bg-center`}>
            <div className='lg:container md:mx-auto bg-slate-400 bg-opacity-70  grid grid-cols-1'>
                {/* <MissingNoWarning /> */}
                <RadomMonSection />
                <SearchBar />
                <PokeInfo />
            </div>
        </div>
    )
}

export default Body 