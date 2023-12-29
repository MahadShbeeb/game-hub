import { HStack , Image} from '@chakra-ui/react'
import logo  from "../assets/tree-logoa.jpg"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack display='flex' justifyContent='space-between'>
        <Image src={logo}  borderRadius='full' boxSize='60px' padding='10px' objectFit='cover'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar