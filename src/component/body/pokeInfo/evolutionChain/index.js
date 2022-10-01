import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEvolutionChain, setChain } from '../../../../reduxSlicer/evolutionChain';
import treeToChain from '../../../../tool/buildChainFromTree';
import buildTree from '../../../../tool/getEvochainData';
import LoadingSpinner from '../../../loadingSpiner';
import EvoChain from './evoChain';



const EvolutionChain = ({ evoChainProb }) => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const evoChain = useSelector((state) => state.evolutionChain)
    const dispatch = useDispatch();
    // the ascnycrom axios function
    const getEvolutionChain = async (url) => {
        // get the evolution chain object from the API
        const res = await axios.get(url);
        dispatch(setEvolutionChain(res.data));

        // The below code part is for retrieve the pokemon info in evolution chain
        //===========================================================================================================================
        // Because API response the chain with nested pokemon in an object so we have to use while to get all pokemon data
        // To do that we use a while loop and some flag to go through multiple nested object
        const evoTree = await buildTree(res.data.chain);
        const evoChains = await treeToChain(evoTree);
        dispatch(setChain(evoChains));

    }
    useEffect(() => {
        getEvolutionChain(evoChainProb);
    }, [evoChainProb]);


    return (
        <div className="bg-slate-300 rounded-lg m-5 col-span-2 grid grid-cols-1 ">
            <h1 className="text-lg font-bold mt-1">Evolution Chain</h1>
            {
                evoChain.allChains ?
                    evoChain.allChains.map(element => <EvoChain chain={element} />)
                    : <h1> This pokémon dosen`t Evolving</h1>
            }
        </div>
    )
}

export default EvolutionChain