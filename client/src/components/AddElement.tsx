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

type EditablelementProps = {
  text: string;
  currentId: number;
  handler: Function;
  title_btn: string; 
};

const AddElement = ({ text, title_btn, currentId, handler }: EditablelementProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const formik = useFormik({
    initialValues: {
      element: text,
    },
    onSubmit: (values) => {
      setActiveId(null);
      handler(text, values.element); 
    },
  });
  return (
    <>
      {activeId !== currentId ? (
        <Button onClick={() => setActiveId(currentId)} m="10px">{title_btn}</Button> 
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Flex>
            <Textarea
              variant="unstyled"
              id="element"
              rows={1}
              maxW="150px"
              resize="none"
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

export default AddElement;