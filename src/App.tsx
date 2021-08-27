import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/CardDigimon/styles';
import { Digimons } from './components/Digimons';
import { useFavoriteDigimonList } from './providers/FavoriteDigimonsList';
import { FavoritesList, List } from './styles';
import { IDigimon } from './types/digimons';

function App() {

  const {favoriteDigimonList} = useFavoriteDigimonList()
  const [digimons, setDigimons ] = useState<IDigimon[]>([])
  const [erro, setErro] = useState<string>('')

  useEffect(()=>{
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((response) => setDigimons([...response]))
      .catch(() => setErro('Algo deu errado') );
  }, [])

  return (
    <div className="App">
      <div className="App-header">
      <Container>
        <FavoritesList>
          <Digimons digimons={favoriteDigimonList} isFavorite={true}/>
        </FavoritesList>
        <List>
          <Digimons digimons={digimons}/>
        </List>
      </Container>
      </div>
    </div>
  );
}

export default App;
