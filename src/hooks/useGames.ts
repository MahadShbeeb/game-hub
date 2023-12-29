import { AxiosRequestConfig, CanceledError } from 'axios'
import { Genre } from './useGenres'
import useData from './useData'

export interface Platform{
    id : number,
    name : string,
    slug : string,
}
export interface Game{
    id : number,
    name : string
    background_image : string
    parent_platforms : {platform : Platform}[]
}

const useGames = (selectedGenre : Genre | null , selectedPlatform : Platform | null ) => {
    const { data , error , isLoading } = useData<Game>('/games',{
        params:{
            genres : selectedGenre?.id,
            platforms : selectedPlatform?.id
        }
    },
    [selectedGenre?.id , selectedPlatform?.id]
    );
    return  { data , error , isLoading }
}

export default useGames;