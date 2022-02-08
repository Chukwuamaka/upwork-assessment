import React from 'react';
import { Badge, Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import RequestAction from './RequestAction';

export default function Card({badge, authorImage, author, time, content, expandMenu}) {
  return (
    <Box rounded={12} bg='brand.midnight_express' maxW={640} margin='auto'>
      <Box rounded={3} p={8}>
        <HStack justify='space-between' align='baseline' mb={6}>
          <HStack spacing={3}>
            <Badge variant='solid' bg='brand.crail' rounded='full' textTransform='capitalize' fontWeight='semibold' fontSize={13} px={5} py={3}>
              {badge}
            </Badge>
            <Image src={authorImage} alt={author} borderRadius='50%' maxW='12%' />
            <Text fontWeight='semibold' fontSize={18} color='white'>{author}</Text>
            <Text fontWeight='semibold' fontSize={12} color='white' opacity={0.5}>{time} ago</Text>
          </HStack>
          <Text fontSize='2xl' color='white' opacity={0.5} cursor='pointer' onClick={expandMenu}>...</Text>
        </HStack>

        <VStack spacing={6} fontSize={18} color='white' opacity={0.8} fontFamily='Lato'>
          {
            content.map((item, index) => <Text key={index+1}>{item}</Text>)
          }
        </VStack>
      </Box>
      
      <RequestAction />
    </Box>
  );
}
