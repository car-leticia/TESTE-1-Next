'use client'

import { Button as ChakraButton,  VStack, Box, Heading } from "@chakra-ui/react"
import { useState } from "react";

export function CustomButton(){
    const [nome, setNome] = useState("Leticia Alves")

    function handleChangeName() {
        setNome("Caroline Santos")
    }

    return(
        <Box p={4}
        bg="black"
        borderRadius="lg"
        textAlign={"center"}
        >
            <VStack spacing={4}>
                <ChakraButton textAlign={"center"} onClick= {(handleChangeName)=> alert ('Clicou')}>
                    Alterar nome
                </ChakraButton>
                
                <Heading as= "h3" size="md">
                    {nome}
	            </Heading>
 
            </VStack>

        </Box>
        
    )
}

