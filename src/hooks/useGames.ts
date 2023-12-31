import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import ms from 'ms'
import { GameQuery } from "../pages/HomePage"
import { Game } from "../entites/Game"

const apiClient = new APIClient<Game>('/games')


const useGames = (gameQuery : GameQuery) => {
    return useQuery<FetchResponse<Game>>({
        queryKey:['games',gameQuery],
        queryFn : () => apiClient.getAll({
        params:{
            genres : gameQuery.genre?.id,
            parent_platforms : gameQuery.platform?.id,
            ordering : gameQuery.sortOrder,
            search : gameQuery.searchText
        }
    }),
    staleTime : ms('24h') ,
    })
}

export default useGames;