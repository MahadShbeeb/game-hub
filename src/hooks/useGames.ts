import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import { Game } from "../entities/Game"
import useGameQueryStore from "../store"
import ms from 'ms'

const apiClient = new APIClient<Game>('/games')

const useGames = () => {

    const gameQuery = useGameQueryStore(s=>s.gameQuery)
    return useQuery<FetchResponse<Game>>({
        queryKey:['games',gameQuery],
        queryFn : () => apiClient.getAll({
        params:{
            genres : gameQuery.genreId,
            parent_platforms : gameQuery.platformId,
            ordering : gameQuery.sortOrder,
            search : gameQuery.searchText
        }
    }),
    staleTime : ms('24h') ,
    })
}

export default useGames;