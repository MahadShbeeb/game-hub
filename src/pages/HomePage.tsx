import { GridItem, Grid, Show , Flex, Box } from '@chakra-ui/react'
import  { useState } from 'react'
import { Genre } from '../entities/Genre'
import { Platform } from '../entities/Platform'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortingSelector from '../components/SortingSelector'
import GameGrid from '../components/GameGrid'
import useGameQueryStore from '../store'


const HomePage = () => {
    return (
    <Grid templateAreas={{
    base:`"main"` ,
    lg:`"aside main"`

  }} >

  <Show above="lg">  

  <GridItem area='aside'>
    <GenreList  /> 
  </GridItem>
  
</Show>
  <GridItem area='main' padding='20px'>
    <GameHeading />
    <Flex marginY='20px'>
      <Box marginRight='10px'>
          <PlatformSelector />
      </Box>
    <SortingSelector />
    </Flex>
    <GameGrid />    
  </GridItem>

</Grid>
  )
}

export default HomePage