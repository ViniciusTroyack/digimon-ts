import React from 'react'
import { IDigimon } from '../../types/digimons'
import { CardDigimon } from '../CardDigimon'

interface IDigimonsProps{
    digimons: IDigimon[];
    isFavorite?: boolean;
}

export const Digimons = ({digimons, isFavorite= false}: IDigimonsProps) => {
    return (
        <>
            {digimons.map((digimon, index) => <CardDigimon key={index} digimon={digimon} isFavoritesList={isFavorite} />)}
        </>
    )
}
