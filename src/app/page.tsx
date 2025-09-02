import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';


export const revalidate = 60


export default function Home(){
  const randomNumber = Math.random() * 10;

  return (
    <Box >
      <Heading>
        Pagina Home 
      </Heading>
      <Heading>
        Numero gerado: {randomNumber}
      </Heading>
    
      

    </Box>

  )
}

