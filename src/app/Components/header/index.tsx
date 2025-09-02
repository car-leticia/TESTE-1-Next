import { Flex, Text, Link, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Header() {
  return (
    <Flex bg="black" p={4} color="white" justify="space-between" align="center">
      <Text fontSize="xl">NextJS</Text>
      <nav>
        <HStack spacing={6} as="ul" listStyleType="none">
          <Text as="li">
            <Link as={NextLink} href="/" _hover={{ textDecoration: 'underline' }}>
              Home
            </Link>
          </Text>
          <Text as="li">
            <Link as={NextLink} href="/posts" _hover={{ textDecoration: 'underline' }}>
              Posts
            </Link>
          </Text>
          <Text as="li">
            <Link as={NextLink} href="/Dashboard" _hover={{ textDecoration: 'underline' }}>
              Dashboard
            </Link>
            </Text>
        </HStack>
      </nav>
    </Flex>
  );
}