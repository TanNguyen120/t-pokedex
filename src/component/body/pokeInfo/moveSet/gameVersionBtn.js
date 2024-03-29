import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentGame } from '../../../../reduxSlicer/currentGameVersion';
import gameToTextColor from '../../../../tool/gameToColorText';


const GameVersionBtn = ({ gameVersionName }) => {
    const currentGame = useSelector(state => state.currentGameVersionMove);
    const dispatch = useDispatch();
    let bg = 'bg-inherit text-slate-400'

    if (currentGame.game === gameVersionName) {
        let textColor = gameToTextColor(gameVersionName);
        bg = 'bg-white ' + textColor
    }
    return (
        <div
            className={
                `${bg} rounded-lg m-3 p-2 hover:cursor-pointer text-center 
            transition ease-in-out delay-50 hover:-translate-y-1 
            hover:scale-110 hover:bg-slate-400 duration-150 hover:text-white capitalize`}
            onClick={e => {
                dispatch(setCurrentGame(gameVersionName));
            }}>
            {gameVersionName}
        </div>
    )
}

export default GameVersionBtn