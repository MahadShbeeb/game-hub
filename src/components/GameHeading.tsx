import { Heading } from '@chakra-ui/react'
import useGameQueryStore from '../store'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'

const GameHeading = () => {
    const genreId = useGameQueryStore(s=>s.gameQuery.genreId)
    const platformId = useGameQueryStore(s=>s.gameQuery.platformId)
    
    const genre = useGenre(genreId!)
    const platform = usePlatform(platformId!)
    
    let title = `${platform?.name || '' } ${genre?.name || ''} Games`
    return (
    <Heading as='h1' marginY='10px'>{title}</Heading>
)
}

export default GameHeading