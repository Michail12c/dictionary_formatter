import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'

function ParseTextScreen({listWordsArr, handlerLoad}) {

    const [selectWords, setSelectWords] = useState({}); 

    const handler = (e) => {
      setSelectWords({...selectWords, [e.target.dataset.value]: true}); 
    }

    const setColor = (value) => {
       if(selectWords[value]) {
           return "orange"
       }
       return "black"
    }

    console.log(selectWords)

    return (
        <Box w="100%">
            <Flex 
            width="100%" 
            heigh="400px" 
            backgroundColor="white"
            wrap="wrap">
                {listWordsArr?.length && listWordsArr.map((item, index) => <Text 
                margin="5px"
                key={index}
                onClick={handler}
                cursor="pointer"
                data-value={item}
                color={setColor(item)}
                fontSize="14px" 
                as="span">
                    {item}
                </Text>) }
            </Flex>
            <Flex margin="10px">
               <Button onClick={()=> handlerLoad(listWordsArr)} m="10px">
                   Load all text
               </Button>
               <Button 
                 onClick={() => {
                    let result = Object.entries(selectWords);
                    handlerLoad(result); 
                 }}
                 isDisabled={Object.keys(selectWords).length === 0} m="10px">
                     Load mark words
                 </Button>
            </Flex>
        </Box>
    )
}

export default ParseTextScreen
