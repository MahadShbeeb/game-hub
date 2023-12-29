import { Card , CardBody , Heading , Image , Text } from '@chakra-ui/react'
import { Game  } from '../hooks/useGames'
import PlatformIconsList from './PlatformIconsList'

interface Props{
    game : Game
}

const GameCard = ( { game } : Props ) => {
    return (
    <>
    <Card   height='300px' borderRadius='10px' overflow='hidden'>
    <Image src={game.background_image} />
    <CardBody>
    <Heading as='h4' size='md' noOfLines={1}>{ game.name }</Heading>
    <PlatformIconsList platforms = {game.parent_platforms.map(p=>p.platform)}/>
  </CardBody>
    </Card>
    </>
)
}

export default GameCard