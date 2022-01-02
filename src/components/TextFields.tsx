import { Textarea } from "@chakra-ui/textarea";
import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";


function TextField(props: any) {
  return (
    <Box width="100%">
      <FormControl width="100%">
        {props?.label && (
          <FormLabel
            fontSize="14px"
            fontFamily="Mulish"
            fontWeight="700"
            color={!props.error ? "#304358" : "#F44970"}
          >
            {props.label}
          </FormLabel>
        )}
        <Textarea
          border="1px"
          h="56px"
          borderColor="#A3B2B1"
          borderRadius="16px"
          width="100%"
          isInvalid={props.error}
          errorBorderColor="#F44970"
          _hover={{
            borderColor: !props.error ? "#304358" : "#F44970",
          }}
          _focus={{
            borderColor: !props.error ? "#304358" : "#F44970",
          }}
          {...props}
        />
        {props?.helperText && (
          <FormHelperText>{props?.helperText}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}

export default TextField;
