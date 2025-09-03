import { Box, Heading,Text } from "@chakra-ui/react"
import { Suspense } from "react";
import { PostInfo } from "./_components/post";




export default async function DetailPost({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params;
  
      

  return (
    <Box p={6}>
      <Heading as="h2" size="lg" textAlign={"center"}>
        Detalhes do post: {id}
      </Heading>
      
      <Suspense fallback={<Heading>Carregando...</Heading>}>
      <PostInfo id={id}/>
      </Suspense>
  

    </Box>
  )
}

