import React from 'react';
import { IoStatsChartSharp } from 'react-icons/io5';
import statToColor from '../../../../tool/statToColor';
import statToIcon from '../../../../tool/statToIcon';
import toTitleCase from '../../../../tool/upperCaseString';
const StatCanvas = ({ stat }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 p-1">
            <h3 className=' text-slate-500'>
                Base Stat <IoStatsChartSharp className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid grid-cols-3 md:grid-cols-6'>
                {stat.map((element, index) => {
                    const bgColor = statToColor(element.stat.name);
                    return (<div key={index} className={`rounded-lg m-2 border  border-indigo-600 text-black md:text-sm text-xs ${bgColor} font-semibold `}>
                        <div className='mt-3 text-white'>{statToIcon(element.stat.name)} {element.base_stat}  </div>
                        <div className='mt-2 font-semibold text-white'>{toTitleCase(element.stat.name)}</div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default StatCanvas