import { Card , CardBody, SkeletonText ,Skeleton, Stack, Box , SkeletonCircle } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return (
    <Card width='350px' height='300px' borderRadius='10px' overflow='hidden'>
        <Skeleton borderRadius='10px' height='200px' >
        <CardBody>
        <SkeletonText display=' flex:1' mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </CardBody>
    </Skeleton>
    </Card>
    )
}

export default GameCardSkeleton