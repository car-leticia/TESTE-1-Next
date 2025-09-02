'use client'

import { Box, Heading, Text, Flex, Button, Link} from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function PageTeste () {

    const [posts, setPosts] = useState ([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))

    }, [])

    return(

        <Box>

            <Button colorScheme="teal" size="lg" margin={5} onClick={() => alert('Você clicou no botão!')}>
            Botão
            </Button>

           <Heading as="h2" fontWeight="bold" textAlign={'center'} p={5}>
                        Página Cliente
            </Heading>

            <Flex direction="column" gap={3} mx={2}>
                      {posts.map((post: any) => (
                      <Box key={post.id} bg="gray.200" p={4} rounded="md">

                        <Heading as="h2" fontWeight="bold">
                          {post.title}
                        </Heading>
                        <Text>{post.body}</Text>
                      
                      </Box>
                    ))}
                  </Flex>
  

        
              </Box>
    )


}
