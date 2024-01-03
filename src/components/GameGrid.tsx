import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import { SimpleGrid } from '@chakra-ui/react'
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
    const {data , error , isLoading } = useGames()
    const skeletons = [ 1 , 2 , 3 , 4 , 5 , 6 ]
    return (
    <> 
        <SimpleGrid columns={[1,2, 3]} spacing='10px'>     
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} /> )} 
        {data?.results.map(game =><GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    </>
    )
}

export default GameGrid


