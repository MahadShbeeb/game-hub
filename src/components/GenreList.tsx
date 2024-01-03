import { ListItem , List , HStack , Image , Button } from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'
import useGameQueryStore from "../store"
import useGenres  from "../hooks/useGenres"

const GenreList = ( ) => {
    const {data , error , isLoading } = useGenres()
    const skeletons = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
    const genreId = useGameQueryStore(s=>s.gameQuery.genreId)
    const setGenreId = useGameQueryStore(s=>s.setGenreId)
 
    return (
        <>   
        <List marginY='10px'>
        {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton} /> )}
        {data?.results.map(genre =>
        <ListItem key={genre.id} marginY='15px'>
            <HStack  marginX='5px'>
            <Image borderRadius='full' boxSize='35px' marginX='5px' src={genre.image_background}/>
            <Button textAlign='left' variant='link' whiteSpace='normal'
             fontWeight={(genreId === genre.id)?'bold':'normal'}
             onClick={ () => setGenreId(genre.id)} >{genre.name}</Button>   
            </HStack>
            </ListItem> 
        )}
        </List>
    </>

    )
}

export default GenreList