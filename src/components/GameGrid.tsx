import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import { SimpleGrid } from '@chakra-ui/react'
import GameCardSkeleton from "./GameCardSkeleton"
import { Genre } from "../hooks/useGenres"

interface Props{
    selectedGenre : Genre | null
    selectedPlatform : Platform | null
}

const GameGrid = ({selectedGenre , selectedPlatform} : Props) => {
    const {data , error , isLoading } = useGames(selectedGenre , selectedPlatform)
    const skeletons = [ 1 , 2 , 3 , 4 , 5 , 6 ]

    return (
    <>   
        <SimpleGrid columns={[1,2, 3]} spacing='10px'>     
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} /> )}
        
        {data.map(game =><GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    </>
    )
}

export default GameGrid


