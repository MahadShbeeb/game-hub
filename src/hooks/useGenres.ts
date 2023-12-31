import APIClient, { FetchResponse } from '../services/api-client'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { Genre } from '../entites/Genre'

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
    return useQuery<FetchResponse<Genre>>({
        queryKey:['genres'],
        queryFn : apiClient.getAll,
        staleTime : ms('24h') ,
    })
}

export default useGenres
