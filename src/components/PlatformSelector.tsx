import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../entities/Platform';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {
    const platformId = useGameQueryStore(s=>s.gameQuery.platformId)
    const setPlatformId = useGameQueryStore(s=>s.setPlatformId)

    const platform =usePlatform(platformId!)
    const {data} = usePlatforms()
    return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    {platform?platform.name:'Platforms'}
    </MenuButton>
    <MenuList>
        {data?.results.map(platform=><MenuItem onClick={()=>setPlatformId(platform.id)}
        key={platform.id} >{platform.name}</MenuItem>)}
    </MenuList>
</Menu>
    </>
)
}

export default PlatformSelector