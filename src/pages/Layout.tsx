import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'


const Layout = () => {
    return (
    <>
        <NavBar />
        <Box padding='40px'>
            <Outlet/> 
        </Box>           
    </>
    )
}

export default Layout