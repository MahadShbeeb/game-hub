import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Box, Image, Heading, SimpleGrid, Spinner, GridItem } from '@chakra-ui/react'
import ExpandableText from '../components/ExpandableText'
import { GameAttributes } from '../components/GameAttributes'
import GameTrailer from '../components/GameTrailer'
import GameScreenshots from '../components/GameScreenShots'

const GameDetailsPage = () => {
    const {slug} = useParams()
    const {data ,isLoading,error}=useGame(slug!)

    if (isLoading) return <Spinner/> 
    if (error || !data) throw Error

    return (
        <SimpleGrid columns={{base : 1,md:2}}>
            <GridItem>
                <Heading>{data.name}</Heading>  
                <ExpandableText >{data.description_raw}</ExpandableText>
                <GameAttributes game={data}></GameAttributes>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={data.id} />
                <GameScreenshots gameId={data.id} />
            </GridItem>
            </SimpleGrid>
    )
}

export default GameDetailsPage