
import { Box, Heading, Text, Flex, Button, VStack, Input, Center, Link  } from '@chakra-ui/react';

export interface PostProps {
    id: number
    title: string
    body: string
    userId: number

}

 export interface  ResponseProps{
    posts: PostProps[]

}
 export const revalidate = 60;

export default async function PostsPages() {
    const response = await fetch('https://dummyjson.com/posts', {
      cache: 'force-cache',
      next: {
        revalidate: 60
      }
    })
    const data:ResponseProps = await response.json()


    async function handleFetchPosts() {
      'use server'
      const response = await fetch('https://dummyjson.com/posts')
      const data:ResponseProps = await response.json()

      console.log(data.posts)    
    }


    async function handleSearcUsers(formData: FormData) {
      'use server'

      const userId = formData.get('userId')
      const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
      const data:ResponseProps = await response.json()


      console.log(data)

      
    }


    return ( 
        <Box as="form" onSubmit={handleFetchPosts} p={4}>

            <Heading textAlign ={'center'} margin={5}>
                Todos os Posts
            </Heading>

            <VStack spacing= {2} >
            <Input 
              size="sm"
              w={80}
		          type= "text"
		          placeholder="Id do usuario"
		          borderColor="gray.300"
              borderRadius={8}
              name='userId'
            
              />		

              <Button colorScheme="blue" type="submit" margin={4}>
              Buscar usuário
            </Button>
            </VStack>

            <Flex direction="column" gap={3} mx={2}>
                {data.posts.map(post => (
          <Box key={post.id} bg="gray.200" p={4} rounded="md">
            <Heading as="h2" fontWeight="bold">
              {post.title}
            </Heading>
            <Text>{post.body}</Text>
            <Link color='blue' href={`/posts/${post.id}`}>Ver detalhes desse post</Link>
          </Box>
        ))}
      </Flex>

            
        </Box>
    )
}