import { Box, Card , CardBody , Heading , Image , Text } from '@chakra-ui/react'
import { Game } from "../entites/Game"
import PlatformIconsList from './PlatformIconsList'
import { Link } from 'react-router-dom'

interface Props{
    game : Game
}

const GameCard = ( { game } : Props ) => {
    return (
    <>
    <Card   height='350px' borderRadius='10px' overflow='hidden'>
    <Image src={game.background_image} />
    <CardBody>
      <Box marginBottom='20px'> 
            <PlatformIconsList platforms = {game.parent_platforms.map(p=>p.platform)}/>
      </Box>
    <Heading as='h4' size='md' noOfLines={1}>
      <Link to={`/games/${game.slug}`}>{ game.name }</Link>
      
    </Heading>
  </CardBody>
    </Card>
    </>
)
}

export default GameCard