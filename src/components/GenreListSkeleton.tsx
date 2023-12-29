import { List , SkeletonText , SkeletonCircle , HStack , ListItem } from "@chakra-ui/react"

const GenreListSkeleton = () => {
  return (
    <List marginY='10px'>
        <ListItem marginY='15px'>
                <HStack marginX='5px'>
                  <SkeletonCircle borderRadius='full' marginX='5px' size='35px' />
                  <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
                </HStack>
        </ListItem>
    </List>
  )
}

export default GenreListSkeleton