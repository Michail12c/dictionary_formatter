import { Box, Center, Divider, Flex, Text } from '@chakra-ui/layout'
import React, { useRef, useState } from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup';
import TextField from '../../components/TextFields';
import { Button } from '@chakra-ui/button';



function InputScreen({handlerLoad}) {

  const ValidationSchema = Yup.object().shape({
    new_text: Yup.string()
    .required('Field is required').max(200),
  });

  let initialValues = {
    new_text: "",
  }; 

  const loadText = (value) => {
    handlerLoad(value.new_text);  
  }

    return (
       <>
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
              loadText(values); 
            }} >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            setValues,
            setTouched,
            isSubmitting,
            touched,
            values,
          }) => (
          <form onSubmit={handleSubmit}>
              <Box>
                <TextField 
                name="new_text"
                value={values.new_text}
                error={(errors.new_text && touched.new_text) ? true : false}
                label={"Your text"}
                onChange={handleChange}
                placeholder="Text"
                />
              </Box>
              <Box w="100%" display="flex" justifyContent="flex-end" pt="20px">
                  <Button type="submit">Load</Button>
              </Box>

         </form>
         )}
        </Formik>  
       </>

    )
}

export default InputScreen
