import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";

const SortingSelector = () => {

    return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Order by :
    </MenuButton>

    <MenuList>
    <MenuItem>Popularity</MenuItem>
    <MenuItem>Newest</MenuItem>
    <MenuItem>Oldest</MenuItem>
    <MenuItem>Relevance</MenuItem>
    </MenuList>

</Menu>
    </>
)
}

export default SortingSelector