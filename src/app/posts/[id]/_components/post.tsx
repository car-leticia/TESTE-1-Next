import { Box, Heading, Text} from "@chakra-ui/react";
import { PostProps } from "../../page"
import { h2 } from "framer-motion/client";

export  async function PostInfo({id}: {id: string}){

    await new Promise(resolve => setTimeout(resolve, 4000))

    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return(
        <Box>
            <Heading as={h2}>{data.title}</Heading>
            <Text>{data.body}</Text>
        </Box>

    )
}