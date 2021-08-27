import React, { ReactNode, useState, useContext } from 'react'
import { createContext } from 'react'
import { IDigimon } from '../../types/digimons'

interface FavoriteDigimonListProviderData {
    favoriteDigimonList: IDigimon[];
    addDigimon: (digimon: IDigimon) => void;
    removeDigimon: (digimon: IDigimon) => void;
}

interface FavoriteDigimonListProps {
    children: ReactNode;
}

const FavoriteDigimonListContext = createContext<FavoriteDigimonListProviderData>({} as FavoriteDigimonListProviderData)

export const FavoriteDigimonListProvider = ({children}: FavoriteDigimonListProps) => {

    const [favoriteDigimonList, setFavoriteDigimonList ] = useState<IDigimon[]>([]);

    const addDigimon = (digimonToBeAdd: IDigimon) =>{
        setFavoriteDigimonList([...favoriteDigimonList, digimonToBeAdd]);
    }

    const removeDigimon = (digimonToBeRemoved: IDigimon) => {
        const newList = favoriteDigimonList.filter(digimon => digimon.name !== digimonToBeRemoved.name);
        setFavoriteDigimonList(newList);
    }


    return (
       <FavoriteDigimonListContext.Provider value={{favoriteDigimonList, addDigimon, removeDigimon}}>
           {children}
       </FavoriteDigimonListContext.Provider>
    )
}

export const useFavoriteDigimonList = () => useContext(FavoriteDigimonListContext)