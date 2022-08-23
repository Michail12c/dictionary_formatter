import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useReducer, useState } from "react";
import { COMMENT, EDIT, SELF_TRANSLATE, TRANSLATE } from "../../constants/common";
import { WordData } from "../../types/editorTypes";
import { useTransformerListWords } from "./hooks";
import { EditIcon } from '@chakra-ui/icons'; 
import EditableElement from "../../components/EditableElement";
import AddElement from "../../components/AddElement";
import { fileService } from "../../services";

type PropsListView = {
  list: Array<string>;
};

function ListViewScreen({ list }: PropsListView) {
  const [listTransformedWords, setListTransformedWords] = useState<WordData>(
    {}
  );
  const [baseList, setBaseList] = useState(list); 
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useTransformerListWords(baseList, listTransformedWords, setListTransformedWords); 

  console.log("list", listTransformedWords);
  console.log("list2", baseList);

  const generatedFile = () => {
    let text = baseList.join();
    fileService.saveFile(`${baseList[0]}`, [text]); 
  };

  const handlerTranslate = (word: string) => {
  
  }


  const saveEdit = (prevText: string, newText: string, type: string) => {
    let newList = { ...listTransformedWords }; 
    newList[prevText][type] = newText;
    if(type === "word") {
      let newBaseList = baseList.map(item => {
        if(item === prevText) {
          item = newText; 
        }
        return item;
      }); 
      setBaseList(newBaseList); 
    } else {
      forceUpdate();
    }
    setListTransformedWords(newList);
  }

  return (
    <Box w="100%" h="max-content">
      <Flex direction="column">
        {baseList &&
          Object.values(listTransformedWords).map((item, idx) => (
            <Box
              width="50%"
              height="55px"
              display="flex"
              justifyContent="space-between"
              key={idx}
              alignItems="center"
            >

            <EditableElement 
              text={item.word} 
              currentId={idx} 
              handler={(prev, next)=> saveEdit(prev, next, "word")}/>

             <Flex align="center" justifyContent="right">
               {!item.translate && <Button onClick={() => handlerTranslate(item.word)} m="10px">Translate</Button>}
                {!item.translate 
                  ? <AddElement 
                      text={item.translate}
                      title_btn="Your translate"
                      currentId={idx}
                      handler={(prev, next)=> saveEdit(item.word, next, "translate")}/>
                  : <EditableElement 
                      text={item.translate} 
                      currentId={idx} 
                      handler={(prev, next)=> saveEdit(item.word, next, "translate")}/>}
               {!item.comment 
                  ? <AddElement 
                      text={item.comment}
                      title_btn="Write comment"
                      currentId={idx}
                      handler={(prev, next)=> saveEdit(item.word, next, "comment")}/>
                  : <EditableElement 
                      text={item.comment} 
                      currentId={idx} 
                      handler={(prev, next)=> saveEdit(item.word, next, "comment")}/>}
              </Flex>
            </Box>
          ))}
      </Flex>
      <Flex>
        <Button onClick={() => generatedFile()}>Generated file</Button>
      </Flex>
    </Box>
  );
}

export default ListViewScreen;
