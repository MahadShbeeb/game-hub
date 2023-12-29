import { Box, Card , CardBody , Heading , Image , Text } from '@chakra-ui/react'
import { Game  } from '../hooks/useGames'
import PlatformIconsList from './PlatformIconsList'

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
    <Heading as='h4' size='md' noOfLines={1}>{ game.name }</Heading>
  </CardBody>
    </Card>
    </>
)
}

export default GameCard