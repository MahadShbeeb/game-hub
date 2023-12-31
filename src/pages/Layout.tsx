import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import { GameQuery } from '../pages/HomePage'
import { Box } from '@chakra-ui/react'


const Layout = () => {
    const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)  
    return (
    <>
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
        <Box padding='40px'>
            <Outlet/> 
        </Box>           
    </>
    )
}

export default Layout