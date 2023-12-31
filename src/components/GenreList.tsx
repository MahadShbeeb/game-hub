import useGenres  from "../hooks/useGenres"
import { Genre } from '../entites/Genre'
import { ListItem , List , HStack , Image , Button } from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'

interface Props{
    onSelectedGenre : (genre : Genre) => void,
    selectedGenre : Genre | null
}

const GenreList = ( { onSelectedGenre , selectedGenre } : Props ) => {
    const {data , error , isLoading } = useGenres()
    const skeletons = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

    return (
        <>   
        <List marginY='10px'>
        {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton} /> )}
        {data?.results.map(genre =>
        <ListItem key={genre.id} marginY='15px'>
            <HStack  marginX='5px'>
            <Image borderRadius='full' boxSize='35px' marginX='5px' src={genre.image_background}/>
            <Button textAlign='left' variant='link' whiteSpace='normal' fontWeight={(selectedGenre?.id===genre.id)?'bold':'normal'}
             onClick={ () => onSelectedGenre(genre)} >{genre.name}</Button>   
            </HStack>
            </ListItem> 
        )}
        </List>
    </>

    )
}

export default GenreList