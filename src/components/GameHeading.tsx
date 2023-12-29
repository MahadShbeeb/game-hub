import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery : GameQuery
}

const GameHeading = ({gameQuery}:Props) => {
    
    let title = `${gameQuery.platform?.name || '' } ${gameQuery.genre?.name || ''} Games`
    return (
    <Heading as='h1' marginY='10px'>{title}</Heading>
    
)
}

export default GameHeading