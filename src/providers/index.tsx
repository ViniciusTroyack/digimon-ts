import React, { ReactNode }from 'react'
import { FavoriteDigimonListProvider } from './FavoriteDigimonsList'

interface IProvidersProps {
    children: ReactNode
}

export const Providers = ({children}: IProvidersProps) => {
    
    return (
       <FavoriteDigimonListProvider>
           {children}
        </FavoriteDigimonListProvider>
    )
}

export default Providers;