import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

const SearchInput = () => {
    const setSearchText = useGameQueryStore(s=>s.setSearchText)
    const ref = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    return (
    <>
<form style={{ width : '100%' }} onSubmit={(event)=>{
event.preventDefault();
if(ref.current) {setSearchText(ref.current.value)
navigate('/')}

}}>
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >
    </InputLeftElement>
    <Input ref={ref} size="md" borderRadius='30px' type="search" placeholder='Search games ...' />
    <InputRightElement>
      <CiSearch color='gray.500' size='25px'/>
    </InputRightElement>
</InputGroup>
</form>
    </>
  )
}

export default SearchInput