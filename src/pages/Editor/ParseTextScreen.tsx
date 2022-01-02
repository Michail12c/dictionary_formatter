import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useState } from "react";

type PropsParseText = {
  listWordsArr: Array<string>,
  handlerLoad: Function, 
}

type SelectWords = {
  [key: string]: boolean 
}

function ParseTextScreen({ listWordsArr, handlerLoad }: PropsParseText) {
  const [selectWords, setSelectWords] = useState <SelectWords>({});

  const handler = (e: any) => {
    setSelectWords({ ...selectWords, [e.target.dataset.value]: true });
  };

  const setColor = (value) => {
    if (selectWords[value]) {
      return "orange";
    }
    return "black";
  };

  return (
    <Box w="100%">
      <Flex width="100%" heigh="400px" backgroundColor="white" wrap="wrap">
        {listWordsArr?.length &&
          listWordsArr.map((item, index) => (
            <Text
              margin="5px"
              key={index}
              onClick={handler}
              cursor="pointer"
              data-value={item}
              color={setColor(item)}
              fontSize="14px"
              as="span"
            >
              {item}
            </Text>
          ))}
      </Flex>
      <Flex margin="10px">
        <Button onClick={() => handlerLoad(listWordsArr)} m="10px">
          Load all text
        </Button>
        <Button
          onClick={() => {
            let result = Object.keys(selectWords);
            handlerLoad(result);
          }}
          isDisabled={Object.keys(selectWords).length === 0}
          m="10px"
        >
          Load mark words
        </Button>
      </Flex>
    </Box>
  );
}

export default ParseTextScreen;
