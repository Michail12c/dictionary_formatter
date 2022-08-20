import { Container, Box, Flex } from "@chakra-ui/layout";
import { styleProvider } from "../constants/style";

function LayoutComponent({ children }: any) {
  return (
    <Flex
      maxW="100%"
      height="100vh"
      flexDirection="column"
      justify={"center"}
      bgColor={styleProvider.color.base}
    >
      <Box
        bgImage="url('/images/background_2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        width="100%"
        height="40%"
        position="absolute"
        zIndex={0}
        top={0}
        left={0}
      >
        <Box
          w="100%"
          h={"100%"}
          bgGradient="linear(to-l, #770ae3, #FF0080)"
          opacity={0.5}
        ></Box>
      </Box>
      <Container
        w="100%"
        maxWidth="80%"
        h="40%"
        px="20px"
        py="20px"
        borderRadius={16}
        zIndex={1}
        boxShadow="xl"
        backgroundColor={styleProvider.color.base_light}
      >
        {children}
      </Container>
    </Flex>
  );
}

export default LayoutComponent;
