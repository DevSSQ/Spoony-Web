import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom';

  export default function FullRecipesCard(props) {
    return (
      <Center py={6}>

        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '1000px' }}
          height={{ sm: '476px', md: '40rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={props.pic}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'} color={'#729B79'}>
            {props.name}
            </Heading>
            
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              <br></br> <Heading fontSize={'md'} color={'#729B79'}>Ingredients:</Heading>
           <br></br> {props.Ingred}

            </Text>
            
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                 <br></br> <Heading fontSize={'sm'} color={'#729B79'}>Directions:</Heading>
            <br></br>{props.Dire}

            </Text>

            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
            {props.NF}

            </Text>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>

            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }