import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import ContestEntryRow from './contestEntryRow';

const ContestEntryText = () => {
    const [effectText, setEffectText] = useState([]);

    useEffect(() => {
        const getEntryText = async () => {

            const effectNumber = (await axios.get('https://pokeapi.co/api/v2/contest-effect/')).data.count;
            let effectResult = [];
            for (let i = 1; i <= effectNumber; i++) {
                const entryData = (await axios.get(`https://pokeapi.co/api/v2/contest-effect/${i}`)).data
                effectResult.push(entryData)
            }
            return effectResult;
        }
        const setStateData = async () => {
            const apiResult = await getEntryText();
            setEffectText(apiResult)
        }

        setStateData();
    }, [])
    return (
        <div className=' m-2 rounded-lg bg-slate-300 ring-2 ring-slate-400 p-3'>
            <div className=' m-4 text-lg font-semibold text-slate-500'>
                In Normal Contest Each Pokemon Move Have one of these effect as List Below:
            </div>
            <table className=" table-fixed border-collapse border border-slate-400 w-full rounded-lg">
                <thead className=' bg-slate-200'>
                    <tr className=' text-slate-500'>
                        <th className=' border border-slate-400'>Appeal</th>
                        <th className=' border border-slate-400'>Effect Entries</th>
                        <th className=' border border-slate-400'>Flavour Text</th>
                        <th className=' border border-slate-400'>Jam</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        effectText ? effectText.map((entry, index) => <ContestEntryRow rowData={entry} key={index} />)
                            : <LoadingSpinner />
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ContestEntryText