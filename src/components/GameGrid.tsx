import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import { SimpleGrid } from '@chakra-ui/react'
import GameCardSkeleton from "./GameCardSkeleton"
import { GameQuery } from "../App"
import GameHeading from "./GameHeading"

interface Props{
    gameQuery : GameQuery
}

const GameGrid = ({gameQuery} : Props) => {
    const {data , error , isLoading } = useGames(gameQuery)
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


