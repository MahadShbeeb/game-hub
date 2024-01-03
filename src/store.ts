import { create } from 'zustand'
import { Genre } from './entities/Genre'
import { Platform } from './entities/Platform'

interface GameQuery{
    genreId ?: number ,
    platformId ?: number,
    sortOrder ?: string,
    searchText ?: string
}

export interface GameQueryStore{
    gameQuery : GameQuery;
    setGenreId : (genreId:number)=>void;
    setPlatformId : (platformId:number) => void;
    setSearchText : (searchText:string) => void;
    setSortOrder : (sortOrder:string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery:{},
    setSearchText: (searchText) => set(()=>({gameQuery:{searchText}})),
    setSortOrder: (sortOrder) => set(store=>({gameQuery:{...store.gameQuery,sortOrder}})),
    setGenreId: (genreId) => set(store=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId: (platformId) => set(store=>({gameQuery:{...store.gameQuery,platformId}})),
}))

export default useGameQueryStore;