import { Spinner } from '@chakra-ui/spinner';
import React, { useState } from 'react'
import LayoutComponent from '../../components/LayoutComponent'
import { formattingText } from '../../helpers/mapping';
import InputScreen from './InputScreen'
import ListViewScreen from './ListViewScreen';
import ParseTextScreen from './ParseTextScreen';

const Editor = () => {
  
    const [isFormattedText, setIsFormattedText] = useState<boolean>(false); 
    const [currentComponent, setCurrentComponent] = useState<number>(0); 
    const [formattedList, setFormattedList] = useState(null);
    const [listWords, setListWords] = useState(null); 
    const [isLoad, setIsLoad] = useState<boolean>(false); 

    const handlerLoad = (text: string) => {
      setIsLoad(true); 
      console.log("Text", text)
      let list = formattingText(text); 

      if(list){
          setListWords(list); 
      }
      setIsLoad(false); 
      setIsFormattedText(true); 
      setCurrentComponent(1); 
    }

    const setFormattedListHandler = (list) => {
      console.log("list", list)
      setFormattedList(list);
      setCurrentComponent(2);  
    }

    return (
        <LayoutComponent>
            
          {isLoad && !isFormattedText && <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                /> }

         {!isFormattedText && currentComponent === 0 && <InputScreen handlerLoad={handlerLoad}/>}

         {isFormattedText && !isLoad && currentComponent === 1 && <ParseTextScreen handlerLoad={setFormattedListHandler} listWordsArr={listWords}/>}

         {currentComponent === 2 && formattedList && <ListViewScreen list={formattedList}/>}
        </LayoutComponent>
    )
}

export default Editor
