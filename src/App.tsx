import { GridItem, Grid, Show , Flex, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import SortingSelector from './components/SortingSelector'
import { Platform } from './hooks/useGames'

function App() {
  const [ selectedGenre , setSelectedGenre ] = useState < Genre | null > (null)
  const [ selectedPlatform , setSelectedPlatform ] = useState < Platform | null > (null)

  return (
<>
  <Grid templateAreas={{
    base:`"nav" "main"` ,
    lg:`"nav nav " "aside main"`

  }} >
  <GridItem area='nav' >
    <NavBar /> 
  </GridItem>
  <Show above="lg">  

  <GridItem area='aside'>
    <GenreList onSelectedGenre={(genre)=>setSelectedGenre(genre)} 
    selectedGenre={selectedGenre} /> 
  </GridItem>
  
</Show>
  <GridItem area='main' padding='20px'>
    <Flex marginY='20px'>
      <Box marginRight='10px'>
          <PlatformSelector selectedPlatform={selectedPlatform} 
          onSelectedPlatform={(platform)=>setSelectedPlatform(platform)} />
      </Box>
    <SortingSelector />
    </Flex>
    <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />    
  </GridItem>

</Grid>
</>
  )
}

export default App
