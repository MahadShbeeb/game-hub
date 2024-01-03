import { Button, Menu, MenuButton, MenuItem, MenuList, OrderedList } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import useGameQueryStore from '../store';

const SortingSelector = () => {
    const setSortOrder = useGameQueryStore(s=>s.setSortOrder)
    const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder)

    const sortOrders = [
    {value:'',label:'Relevance'},
    {value:'-added',label:'Date added'},
    {value:'-released',label:'Release date'},
    {value:'name',label:'Name'},
    {value:'-rating',label:'Average rating'},
    {value:'-metacritic',label:'Popularity'}]

    let currentOrder=sortOrders.find(order=>order.value == sortOrder) 

    return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Order by:  { currentOrder?.label || 'Relevance' }
    </MenuButton>

    <MenuList> 
    {sortOrders.map(order=>
    <MenuItem key={order.value} value={order.value}
    onClick={()=>setSortOrder(order.value)}
    >{order.label}</MenuItem>)}
    </MenuList>

</Menu>
    </>
)
}

export default SortingSelector