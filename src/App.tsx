import { GridItem, Grid, Show , Flex, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import SortingSelector from './components/SortingSelector'
import { Platform } from './hooks/useGames'
import GameHeading from './components/GameHeading'

export interface GameQuery{
  genre : Genre | null ,
  platform : Platform | null,
  sortOrder : string,
  searchText : string
}

function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
<>
  <Grid templateAreas={{
    base:`"nav" "main"` ,
    lg:`"nav nav " "aside main"`

  }} >
  <GridItem area='nav' >
    <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})} /> 
  </GridItem>
  <Show above="lg">  

  <GridItem area='aside'>
    <GenreList onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})} 
    selectedGenre={gameQuery.genre} /> 
  </GridItem>
  
</Show>
  <GridItem area='main' padding='20px'>
    <GameHeading gameQuery={gameQuery}/>
    <Flex marginY='20px'>
      <Box marginRight='10px'>
          <PlatformSelector selectedPlatform={gameQuery.platform} 
          onSelectedPlatform={(platform)=>setGameQuery({ ...gameQuery,platform})} />
      </Box>
    <SortingSelector selectedSortingOrder={gameQuery.sortOrder}
    onSelectedOrder ={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
    </Flex>
    <GameGrid gameQuery={gameQuery} />    
  </GridItem>

</Grid>
</>
  )
}

export default App
