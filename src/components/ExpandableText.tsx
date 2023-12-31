import { useState } from 'react'
import {Button, Text } from '@chakra-ui/react'

interface Props {
    children : string
}

const ExpandableText = ({children} : Props) => {
    const [expanded , setExpanded] = useState(false)
    const limit =300

    if (!children) return null
    if (children.length<=limit) return  <Text>{children}</Text> 

    const summary =children.substring(0,limit)
    return (
        <Text>
            {expanded ? children : summary }... 
        <Button textAlign='left' variant='link' whiteSpace='normal' marginLeft='5px'
        onClick={ () => setExpanded(!expanded) }> 
        { expanded ?'See less':'See more'}
        </Button> 
        </Text>
    )
}

export default ExpandableText