import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function ListViewScreen({list}) {
    return (
        <Box w="100%" h="max-content">
            <Flex direction="column">
             {list && list.map((item, idx) => <Box width="50%" display="flex" justifyContent="space-between" key={idx} alignItems="center">
                 <Text fontSize="18px" fontWeight="700">{item}</Text>
                 <Flex align="center" justifyContent="right">
                   <Button m="10px">Translate</Button>
                   <Button m="10px">Edit</Button>
                   <Button m="10px">Your own translate</Button>
                   <Button m="10px">Write comment</Button>
                 </Flex>
                
             </Box>)}
            </Flex>
        </Box>
    )
}

export default ListViewScreen
