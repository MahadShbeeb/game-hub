import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../entites/Platform';

interface Props{
    selectedPlatform : Platform | null,
    onSelectedPlatform : (platform : Platform) => void
}


const PlatformSelector = ({selectedPlatform , onSelectedPlatform} : Props) => {

    const {data} = usePlatforms()
    return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    {selectedPlatform?selectedPlatform.name:'Platforms'}
    </MenuButton>
    <MenuList>
        {data?.results.map(platform=><MenuItem onClick={()=>onSelectedPlatform(platform)}
        key={platform.id} >{platform.name}</MenuItem>)}
    </MenuList>
</Menu>
    </>
)
}

export default PlatformSelector