import React from 'react'
import ListSection from './listSection'

const MachineList = () => {
    return (
        <div className=' bg-whiteStripe bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                A Technical Machine, or TM for short (Japanese: わざマシン Move Machine), is an item that can be used to teach a Pokémon a move.

                                At the top of the Celadon Mansion in the Kanto region, there is a pamphlet that contains information on TMs and HMs, indicating that Silph Co. are involved in the development of TMs.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                TMs are most commonly depicted as discs, but their appearance has varied over time.

                                In artwork for Pokémon Red and Green, TMs are depicted as a band that can be attached to a Pokémon.

                                In the TCG, Technical Machines have the appearance of small boxes which a Pokémon's Poké Ball can be inserted into. This depiction was also used in The Electric Tale of Pikachu manga, though in that manga, the box was actually a device that had to be separated and the two halves positioned around the Pokémon's head.

                                Starting in Pokémon FireRed and LeafGreen, TMs are depicted as compact discs. This depiction was carried over to the Pokémon Mystery Dungeon series.
                            </div>
                        </div>
                        <div className=' items-center'>
                            <img src='https://img.rankedboost.com/wp-content/uploads/2018/11/Pokemon-Lets-Go-TMs-300x200.png' alt='a pokemon learn machine move' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Machine present in game
                            </div>
                        </div>
                    </div>
                    <div>
                        <ListSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MachineList