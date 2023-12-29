import { Button, Menu, MenuButton, MenuItem, MenuList, OrderedList } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";

interface Props{
    onSelectedOrder : ( sortOrder : string ) => void
    selectedSortingOrder : string
}

const SortingSelector = ({onSelectedOrder , selectedSortingOrder} : Props) => {
    const sortOrders = [
    {value:'',label:'Relevance'},
    {value:'-added',label:'Date added'},
    {value:'-released',label:'Release date'},
    {value:'name',label:'Name'},
    {value:'-rating',label:'Average rating'},
    {value:'-metacritic',label:'Popularity'},
    ]
    let currentOrder=sortOrders.find(order=>order.value==selectedSortingOrder) 

    return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Order by:  { currentOrder?.label || 'Relevance' }
    </MenuButton>

    <MenuList> 
    {sortOrders.map(order=>
    <MenuItem key={order.value} value={order.value}
    onClick={()=>onSelectedOrder(order.value)}
    >{order.label}</MenuItem>)}
    </MenuList>

</Menu>
    </>
)
}

export default SortingSelector