import React from 'react'
import { Container, Image } from './styles'
import { Button } from '../Button'
import { IDigimon } from '../../types/digimons';
import { useFavoriteDigimonList } from '../../providers/FavoriteDigimonsList';


interface IDigimonCardProp{
    digimon: IDigimon;
    isFavoritesList?: boolean;
}

export const CardDigimon = ({ digimon, isFavoritesList= false}: IDigimonCardProp) => {

    const { name, level, img }: IDigimon = digimon;

    const {addDigimon, removeDigimon} = useFavoriteDigimonList()

    return (
      <Container>
        <div>{name}</div>
        <Image src={img}></Image>
        <div>{level}</div>
        {isFavoritesList ? (
          <Button deleted={true} onClick={() => removeDigimon(digimon)}>
            Remove
          </Button>
        ) : (
          <Button onClick={() => addDigimon(digimon)}>Add</Button>
        )}
      </Container>
    );
  
}
