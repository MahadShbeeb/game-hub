import { GridItem, Grid, Show , Flex, Box } from '@chakra-ui/react'
import  { useState } from 'react'
import { Genre } from '../entites/Genre'
import { Platform } from '../entites/Platform'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortingSelector from '../components/SortingSelector'
import GameGrid from '../components/GameGrid'


export interface GameQuery{
  genre : Genre | null ,
  platform : Platform | null,
  sortOrder : string,
  searchText : string
}
const HomePage = () => {
    const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
    return (
    <Grid templateAreas={{
    base:`"main"` ,
    lg:`"aside main"`

  }} >

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
  )
}

export default HomePage