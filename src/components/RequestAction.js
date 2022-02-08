import { Box, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useState } from 'react';

export default function RequestAction() {
    const [message, setMessage] = useState('');

    const handleChange = (e) => setMessage(e.target.value);
    const submitMessage = () => console.log(message);

    return (
        <Box p={6} bg='brand.lynch'>
            <Text fontWeight='semibold' fontSize={18} color='white' mb={3}>How can you help with this Request?</Text>
            <InputGroup>
            <Input py={3} type='text' rounded='full' placeholder='Type here...' color='white' bg='brand.lynch' border='none' onChange={handleChange} />
            <InputRightElement>
                <Image marginRight={1.5} src='./send_icon.svg' alt='Send Icon' onClick={submitMessage} />
            </InputRightElement>
            </InputGroup>
        </Box>
  );
}
