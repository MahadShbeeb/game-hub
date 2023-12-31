import { FaWindows , FaXbox , FaPlaystation , FaApple , FaLinux ,FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from '../entites/Platform';
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface Props{
    platforms : Platform[] 
}

const PlatformIconsList = ( { platforms } : Props) => {
    const iconMap : { [ key : string ] : IconType } = {
        pc : FaWindows,
        xbox : FaXbox ,
        playstation : FaPlaystation,
        mac : FaApple ,
        linux : FaLinux ,
        android : FaAndroid,
        nintendo : SiNintendo,
        ios : MdPhoneIphone ,
        web : BsGlobe
    }

    return (
    <HStack marginY='10px'>
    { platforms.map( platform => 
    <Icon key = { platform.id } as={iconMap[platform.slug]} color='gray.500' >
         { platform.name } </Icon> ) }
    </HStack>
  )
}

export default PlatformIconsList