import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import DefinitionItem from './DefinitionItem'
import { Game } from '../entites/Game'

interface Props{
    game : Game
}

export const GameAttributes = ({game}:Props) => {
  return (
     <SimpleGrid marginTop='20px' columns={2} as='dl' >
                <DefinitionItem term='Platforms'>
                {game.parent_platforms?.map(({platform})=>
                <p key={platform.id}>{platform.name}</p>) }
            </DefinitionItem>
            <DefinitionItem term='Genres'>
                {game?.genres.map(genre=>
                <p key={genre.id}>{genre.name}</p>) }
            </DefinitionItem>
            </SimpleGrid>
  )
}
