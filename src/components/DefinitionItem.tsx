import { ReactNode } from "react"
import {  Heading } from '@chakra-ui/react'

interface Props{
    term : string,
    children : ReactNode | ReactNode []
}

const DefinitionItem = ({ term , children } : Props) => {
    return (
    <>
        <dd>
            <Heading as='dt' fontSize='md' color='gray.500' marginBottom='10px'>{term}</Heading>
            {children}
        </dd> 
    </>
    )
}

export default DefinitionItem