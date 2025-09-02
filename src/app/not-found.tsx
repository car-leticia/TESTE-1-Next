import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function NotFound(){
    return (
        <Box textAlign={"center"}>
            <Heading fontSize={50}>Pagina 404 não encontrada!</Heading>
            <Text>Essa pagina que tentou acessar não existe</Text>
            <Link as={NextLink} href="/posts" _hover={{ textDecoration: 'underline' }}>
              Voltar para Home
            </Link>
        </Box>

    )
}