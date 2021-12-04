import { Container } from '@chakra-ui/layout'
import React from 'react'
import { styleProvider } from '../constants/style'

function LayoutComponent({children}) {
    return (
        <Container 
          maxW="100%" 
          height="100%" 
          maxH="100%"
          px="20px"
          py="20px"
          backgroundColor={styleProvider.color.base}>
            {children}
        </Container>
    )
}

export default LayoutComponent
