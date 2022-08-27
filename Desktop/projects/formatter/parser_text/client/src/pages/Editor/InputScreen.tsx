import { Box } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextFields";
import { Button } from "@chakra-ui/button";
import { fileService, subtitleService } from "../../services";
import { IconButton } from '@chakra-ui/react';
import { useRef, useState } from "react";

type PropsComponent = {
  handlerLoad: Function,
}

type FormValues = {
  new_text: string,
}

function InputScreen({ handlerLoad }: PropsComponent) {
  const ValidationSchema = Yup.object().shape({
    new_text: Yup.string().required("Field is required").max(200),
  });

  let initialValues: FormValues = {
    new_text: "",
  };

  const fileRef = useRef<any>(null);
  const [defaultValues, setDefaultValues] = useState(initialValues); 
  const [isFile, setIsFile] = useState(false);

  const loadText = (value) => {
    handlerLoad(value.new_text);
  };

  const handlerLoadFile = (e: any) => {
    if(e.target.files[0]) {
      fileService.readFile(e.target.files[0])
      .then(data => {
        setDefaultValues({new_text: `${data}`})
        setIsFile(true); 
        console.log("data", data)
      })
      .catch(error => console.log("error", error))
    }
  }

  const loadSubtitles = () => {
    subtitleService.loadYouTubeSubtitles(); 
  }

  return (
    <>
      <Formik
        initialValues={defaultValues}
        enableReinitialize
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          loadText(values);
        }}
      >
        {({
          errors,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                name="new_text"
                value={values.new_text}
                error={errors.new_text && touched.new_text ? true : false}
                label={"Your text"}
                onChange={handleChange}
                placeholder="Text"
              />
            </Box>
            <Box  w="100%" display="flex" justifyContent="flex-end" pt="20px">
            {!isFile && <IconButton
              aria-label="icon"
              icon={
                <div>
                  <input onChange={(e: any) => handlerLoadFile(e)}
                    type={'file'}
                    ref={fileRef}
                    hidden
                    accept-charset="utf-8"
                    accept="*"/>
                  <Button onClick={() => fileRef.current?.click()} mr="10px">Load file</Button>
                </div>}
              size="md"
              display="flex"
              backgroundColor="transparent"
            />}
              <Button type="submit">Load</Button>
              <Button ml="10px" onClick={() => loadSubtitles()}>Load subtitles</Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}

export default InputScreen;
