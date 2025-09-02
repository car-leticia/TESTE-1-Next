import { Box, Heading } from "@chakra-ui/react"
import { Suspense } from "react";
import { PostInfo } from "./_components/post";
import { ResponseProps } from "../page";
import { resolve } from "path";



export default  async function  DetailPost({
  params
}: {
  params: Promise<{ id: string }>
}) 

{
  const { id } = await params;
  
      await new Promise (resolve => setTimeout(resolve, 400))
      const response = await fetch(`https://dummyjson.com/posts/${id}`)
      const data:ResponseProps = await response.json()

  return (
    <Box p={6}>
      <Heading as="h2" size="md">
        Detalhes do post: {id}
      </Heading>
      
      <Suspense fallback={<Heading>Carregando...</Heading>}>
        <PostInfo id={id} />
      </Suspense>

    </Box>
  )
}

