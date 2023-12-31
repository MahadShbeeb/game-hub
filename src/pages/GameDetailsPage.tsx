import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Box, Image, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import ExpandableText from '../components/ExpandableText'
import DefinitionItem from '../components/DefinitionItem'
import { GameAttributes } from '../components/GameAttributes'

const GameDetailsPage = () => {
    const {slug} = useParams()
    const {data ,isLoading,error}=useGame(slug!)

    if (isLoading) return <Spinner/> 
    if (error || !data) throw Error

    return (
        <SimpleGrid columns={{base : 1,md:2}}>
            <Box>
                <Heading>{data.name}</Heading>  
                <ExpandableText >{data.description_raw}</ExpandableText>
                <GameAttributes game={data}></GameAttributes>
            </Box>
            <Box boxSize='lg' margin='40px' >
                <Image src={data?.background_image}  />
            </Box>
            </SimpleGrid>
    )
}

export default GameDetailsPage