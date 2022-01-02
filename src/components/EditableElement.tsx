import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import save_icon from "../assets/icons/save_icon.svg";
import * as Yup from "yup";

type EditablelementProps = {
  text: string;
  currentId: number;
  handler: Function;
};

const EditableElement = ({ text, currentId, handler }: EditablelementProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const ValidationSchema = Yup.object().shape({
    element: Yup.string().required("Field is required"),
  });

  const formik = useFormik({
    initialValues: {
      element: text,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      setActiveId(null);
      handler(text, values.element); 
    },
  });
  return (
    <>
      {activeId !== currentId ? (
        <Box position="relative" mr="20px">
          <EditIcon
            position="absolute"
            right="-10px"
            top="-10px"
            onClick={() => setActiveId(currentId)}
            w="13px"
            h="13px"
            color="#CBD5E0"
            cursor="pointer"
          />

          <Text fontSize="18px" fontWeight="700">
            {text}
          </Text>
        </Box>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Flex>
            <Textarea
              variant="unstyled"
              id="element"
              rows={1}
              maxW="70px"
              resize="none"
              border="1px"
              borderColor={formik.errors.element && formik.touched.element ? "red" : "transparent"}
              mr="5px"
              name="element"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.element}
            />
            <Button
              size="sm"
              type="submit"
              leftIcon={
                <Image
                  src={save_icon}
                  alt="save"
                  boxSize="13px"
                  cursor="pointer"
                  color="#CBD5E0"
                />
              }
            >
              save
            </Button>
          </Flex>
        </form>
      )}
    </>
  );
};

export default EditableElement;
